
import { 
  BarChart, Users, Globe, Award, 
  Briefcase, GraduationCap, Target 
} from "lucide-react";

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              About Our Project
            </h1>
            <p className="text-xl text-gray-600">
              Learn more about our mission to enhance business performance through data-driven insights
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-6">
                At DataInsight, we believe that data is the cornerstone of informed decision-making. Our project, 
                "Enhancing Business Sales with Real-Time and Time Series Analysis for Informed Decision-Making," 
                is founded on the principle that businesses today need more than just raw data—they need actionable insights.
              </p>
              <p className="text-gray-600">
                We're committed to transforming complex data into clear, strategic directions that help businesses 
                optimize their sales performance, identify growth opportunities, and adapt to market changes in real-time.
              </p>
              <div className="mt-8 flex items-center space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Target className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold">Our Mission</h3>
                  <p className="text-gray-600">To empower businesses with actionable insights</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-6">
                  <BarChart className="text-primary h-16 w-16" />
                </div>
                <blockquote className="italic text-gray-600 text-center">
                  "The goal of our project is to bridge the gap between raw data and actionable business intelligence, 
                  enabling companies to make better decisions faster and with greater confidence."
                </blockquote>
                <div className="mt-6 text-center">
                  <p className="font-semibold">Project Lead</p>
                  <p className="text-gray-500">Data Analytics Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              The Project
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the technology and methodology behind our solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Technical Overview
              </h3>
              <p className="text-gray-600 mb-4">
                Our platform leverages cutting-edge technologies in data analytics, 
                machine learning, and visualization to provide comprehensive insights:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Advanced time series algorithms for accurate forecasting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Real-time data processing for immediate insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Interactive visualization tools for better understanding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Customizable dashboards tailored to business needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Secure data integration with existing business systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Methodology
              </h3>
              <p className="text-gray-600 mb-4">
                Our approach combines statistical analysis with machine learning to extract 
                meaningful patterns from complex business data:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Data collection and cleansing for high-quality inputs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Exploratory data analysis to identify patterns and anomalies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Predictive modeling for sales forecasting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Anomaly detection to identify unusual business events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Continuous feedback loops for model improvement</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-heading font-semibold mb-4 text-center">
              Key Project Objectives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="text-primary h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">Enhance Decision Making</h4>
                <p className="text-gray-600">
                  Provide actionable insights for strategic business decisions
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-primary h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">Improve Sales Performance</h4>
                <p className="text-gray-600">
                  Identify opportunities to optimize sales strategies
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">Drive Business Growth</h4>
                <p className="text-gray-600">
                  Leverage data insights to expand market presence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experts behind our data analytics platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-heading font-semibold">Dr. Jane Smith</h3>
              <p className="text-gray-600 mb-2">Lead Data Scientist</p>
              <p className="text-gray-500 text-sm">
                PhD in Machine Learning with 10+ years of experience in predictive analytics
              </p>
              <div className="flex justify-center mt-4">
                <GraduationCap className="text-primary h-5 w-5" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-heading font-semibold">Michael Johnson</h3>
              <p className="text-gray-600 mb-2">Business Analyst</p>
              <p className="text-gray-500 text-sm">
                MBA with expertise in transforming data insights into business strategies
              </p>
              <div className="flex justify-center mt-4">
                <Briefcase className="text-primary h-5 w-5" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-heading font-semibold">Sarah Chen</h3>
              <p className="text-gray-600 mb-2">UI/UX Designer</p>
              <p className="text-gray-500 text-sm">
                Specialized in creating intuitive data visualization interfaces
              </p>
              <div className="flex justify-center mt-4">
                <Users className="text-primary h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
