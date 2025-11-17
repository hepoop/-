import React, { useState, useRef } from 'react';
import { Hero } from './components/Hero';
import { SolutionCard } from './components/SolutionCard';
import { AIModules } from './components/AIModules';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { Solution, SolutionRequest, QueryItem } from './types';
import { generateSolution } from './services/geminiService';
import { SparklesIcon, CheckCircleIcon } from './components/icons';
import { SolutionSkeleton } from './components/SolutionSkeleton';
import { useLocalStorage } from './hooks/useLocalStorage';

const EmailModalContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Conectar con API de email
    console.log(`Enviar solución a: ${email}`);
    setSent(true);
    setTimeout(() => {
      onClose();
      setSent(false);
    }, 2000);
  };

  if (sent) {
    return (
      <div className="text-center py-4">
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <p className="text-lg font-semibold text-slate-700">¡Enviado con éxito!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-slate-600 mb-4">
        Introduce tu correo electrónico para recibir una copia de esta solución.
      </p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com"
        required
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
      <button
        type="submit"
        className="w-full mt-4 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Enviar
      </button>
    </form>
  );
};

const App: React.FC = () => {
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState<Solution | null>(null);
  const [lastQuery, setLastQuery] = useState<SolutionRequest | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [seoText, setSeoText] = useState('');

  const abortControllerRef = useRef<AbortController | null>(null);
  const [, setFavorites] = useLocalStorage<QueryItem[]>('queryFavorites', []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) return;

    setIsLoading(true);
    try {
      // Aquí iría la llamada a tu API de IA
      setSolution('Solución cargando...');
    } catch (error) {
      setSolution('Error al obtener la solución');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSolve = async (request: SolutionRequest, abortController: AbortController) => {
    setIsLoading(true);
    setError(null);
    setSolution(null);
    setLastQuery(request);
    setSeoText(`Solución paso a paso para ${request.query} usando IA.`);
    abortControllerRef.current = abortController;

    // Scroll to the results area smoothly
    const resultsElem = document.getElementById('results-anchor');
    if (resultsElem) {
      resultsElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    try {
      // TODO: descomentar cuando exista backend.
      /*
      const response = await fetch('/api/solve', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(request),
          signal: abortController.signal,
      });
      if (!response.ok) throw new Error('Network response was not ok.');
      const generatedSolution = await response.json();
      */

      const generatedSolution = await generateSolution(request.query, request.categories, abortController.signal);

      setSolution(generatedSolution);
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        setError('¡Ups! Algo no funcionó. Por favor, revisa tu conexión y vuelve a intentarlo.');
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const cancelRequest = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setIsLoading(false);
      setError("Tu solicitud ha sido cancelada.");
    }
  }

  const saveToFavorites = () => {
    if (!solution || !lastQuery) return;
    setFavorites(prev => {
      const newItem: QueryItem = {
        id: crypto.randomUUID(),
        query: lastQuery.query,
        categories: lastQuery.categories,
        timestamp: Date.now()
      };
      // Optimistic UI: Check if it's already there by query
      if (prev.find(p => p.query === newItem.query)) {
        alert('Esta solución ya está en favoritos.');
        return prev;
      };
      alert('Solución guardada en favoritos!');
      return [newItem, ...prev];
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 border-b border-slate-200/50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center py-4">
          <div className="flex items-center gap-2">
            <SparklesIcon className="w-7 h-7 text-indigo-600" />
            <span className="text-xl font-bold text-slate-800 tracking-tight">SolucionaTodo AI</span>
          </div>
        </nav>
      </header>

      <main>
        <Hero onSolve={handleSolve} isLoading={isLoading} cancelRequest={cancelRequest} />

        <div id="results-anchor" className="scroll-mt-20">
          {isLoading && <SolutionSkeleton />}
          {error && (
            <div className="text-center py-12 max-w-2xl mx-auto px-4">
              <p className="text-red-600 bg-red-100 p-4 rounded-lg">{error}</p>
              <button
                onClick={() => lastQuery && handleSolve(lastQuery, new AbortController())}
                className="mt-4 px-6 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-full shadow-sm hover:bg-indigo-700 transition-colors active:scale-95"
              >
                Reintentar
              </button>
            </div>
          )}

          {solution && <SolutionCard solution={solution} onSendByEmail={() => setIsEmailModalOpen(true)} onSave={saveToFavorites} />}
        </div>

        <AIModules />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />

      <Modal isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} title="Enviar solución por email">
        <EmailModalContent onClose={() => setIsEmailModalOpen(false)} />
      </Modal>

      {seoText && <div style={{ display: 'none' }}>{seoText}</div>}
    </div>
  );
};

export default App;