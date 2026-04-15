class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-center p-8">出错了，请刷新页面重试</div>;
    }
    return this.props.children;
  }
}

function TestApp() {
  try {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <TestQuestion />
      </div>
    );
  } catch (error) {
    console.error('TestApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <TestApp />
  </ErrorBoundary>
);