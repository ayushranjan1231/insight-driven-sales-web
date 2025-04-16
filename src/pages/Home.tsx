
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BarChart, LineChart, PieChart, TrendingUp, 
  Clock, Database, BarChart2, Zap, AreaChart 
} from "lucide-react";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              Enhancing Business Sales with <span className="text-primary">Real-Time Analysis</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Make informed decisions with powerful time series analysis and real-time business intelligence
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/login">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <BarChart className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Real-Time Analytics</h3>
              <p className="text-gray-600">
                Monitor key performance indicators in real-time to make immediate, data-driven decisions for your business.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <LineChart className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Time Series Analysis</h3>
              <p className="text-gray-600">
                Analyze historical trends and patterns in your sales data to forecast future performance with confidence.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <PieChart className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Comprehensive Insights</h3>
              <p className="text-gray-600">
                Gain a 360-degree view of your business performance through interactive dashboards and detailed reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-chart-pattern relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform offers comprehensive tools for data analysis and visualization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">Trend Analysis</h3>
              <p className="text-gray-600">
                Identify emerging trends and patterns in your sales data to stay ahead of market changes.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <Clock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">Forecasting</h3>
              <p className="text-gray-600">
                Predict future sales performance with advanced time series forecasting algorithms.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <Database className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">Data Integration</h3>
              <p className="text-gray-600">
                Connect with multiple data sources to consolidate your business information.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <AreaChart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">Interactive Dashboards</h3>
              <p className="text-gray-600">
                Create customizable dashboards to visualize your most important metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              How It Benefits Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your decision-making process with data-driven insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mt-1">
                    <BarChart2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-heading font-semibold mb-2">Increased Sales Performance</h3>
                    <p className="text-gray-600">
                      Identify high-performing products and services to optimize your sales strategy and boost revenue.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mt-1">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-heading font-semibold mb-2">Faster Decision Making</h3>
                    <p className="text-gray-600">
                      Access real-time insights to make quick, informed decisions without delay.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mt-1">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-heading font-semibold mb-2">Strategic Planning</h3>
                    <p className="text-gray-600">
                      Use historical data and forecasts to develop more effective long-term business strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg border border-gray-200">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <div className="h-32 bg-blue-50 rounded-md flex items-center justify-center mb-4">
                  <BarChart className="text-primary h-12 w-12 opacity-50" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                </div>
              </div>
              <p className="text-center text-gray-600 italic">
                "Our interactive dashboards provide at-a-glance insights for busy decision makers."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white wave-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto py-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of businesses that are making smarter decisions with our analytical platform.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
