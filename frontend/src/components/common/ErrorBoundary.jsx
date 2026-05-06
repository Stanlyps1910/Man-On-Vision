import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("--- [REACT ERROR BOUNDARY] ---", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-10 bg-red-50/30 rounded-3xl border border-red-100 text-center animate-in fade-in duration-500">
          <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-red-100/50">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <h2 className="font-luxury text-3xl text-red-900 mb-4">Component Crash Detected</h2>
          <p className="text-red-700/70 max-w-md mx-auto mb-8 font-medium italic">
            The studio dashboard encountered a rendering error. Our team has been notified (check console).
          </p>
          <div className="text-left bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-red-50 overflow-auto max-w-2xl w-full text-[12px] font-mono text-red-600 shadow-inner">
             {this.state.error && this.state.error.toString()}
             <br />
             {this.state.errorInfo && this.state.errorInfo.componentStack}
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="mt-8 px-10 py-4 bg-charcoal text-white rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-mutedbrown transition-all shadow-xl active:scale-95"
          >
            Restart Application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
