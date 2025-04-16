
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { 
  BarChart2, TrendingUp, Users, DollarSign, 
  ShoppingCart, Calendar, ArrowRight, ArrowUp, ArrowDown,
  Clock, BarChart, PieChart, LineChart
} from "lucide-react";

// Component to show a simple stat card
const StatCard = ({ 
  title, 
  value, 
  change, 
  isPositive,
  icon: Icon
}: { 
  title: string; 
  value: string; 
  change: string;
  isPositive: boolean;
  icon: React.ElementType
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">
        {title}
      </CardTitle>
      <div className="bg-primary/10 h-8 w-8 rounded-full flex items-center justify-center">
        <Icon className="h-4 w-4 text-primary" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <div className={`flex items-center text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
        <span>{change}</span>
      </div>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  
  useEffect(() => {
    // In a real application, you would fetch dashboard data here
    console.log("Dashboard mounted - would fetch data here in a real app");
  }, []);
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center">
          <span className="text-sm text-gray-500 mr-2">Last updated:</span>
          <div className="flex items-center text-sm text-primary">
            <Clock className="h-4 w-4 mr-1" />
            <span>Just now</span>
          </div>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Total Revenue" 
          value="$45,231.89" 
          change="12.5% from last month" 
          isPositive={true}
          icon={DollarSign}
        />
        <StatCard 
          title="New Customers" 
          value="2,453" 
          change="8.1% from last month" 
          isPositive={true}
          icon={Users}
        />
        <StatCard 
          title="Total Orders" 
          value="12,345" 
          change="5.2% from last month" 
          isPositive={true}
          icon={ShoppingCart}
        />
        <StatCard 
          title="Conversion Rate" 
          value="3.75%" 
          change="0.8% from last month" 
          isPositive={false}
          icon={TrendingUp}
        />
      </div>
      
      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Chart */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>Monthly revenue comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] bg-blue-50 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                  <p className="text-sm text-gray-500">
                    This is where your PowerBI or other analytics dashboard would be embedded.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column - Secondary Stats */}
        <div className="flex flex-col space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Selling Products</CardTitle>
              <CardDescription>This month's best performers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-purple-100 h-10 w-10 rounded-md flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-semibold">P1</span>
                    </div>
                    <div>
                      <div className="font-medium">Analytics Suite Pro</div>
                      <div className="text-sm text-gray-500">Software</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$12,500</div>
                    <div className="text-xs text-green-500 flex items-center justify-end">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      15.3%
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-blue-100 h-10 w-10 rounded-md flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold">P2</span>
                    </div>
                    <div>
                      <div className="font-medium">Data Visualization Tool</div>
                      <div className="text-sm text-gray-500">Software</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$8,250</div>
                    <div className="text-xs text-green-500 flex items-center justify-end">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      12.1%
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-green-100 h-10 w-10 rounded-md flex items-center justify-center mr-3">
                      <span className="text-green-600 font-semibold">P3</span>
                    </div>
                    <div>
                      <div className="font-medium">Business Insights Package</div>
                      <div className="text-sm text-gray-500">Service</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$6,300</div>
                    <div className="text-xs text-red-500 flex items-center justify-end">
                      <ArrowDown className="h-3 w-3 mr-1" />
                      2.5%
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a href="#" className="text-sm text-primary flex items-center">
                  View all products
                  <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Customer Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[180px] bg-blue-50 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-12 w-12 text-primary/50 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">
                    Customer demographics visualization
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Recent Activity Table */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest transactions and events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Event
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="bg-green-100 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                            <ShoppingCart className="h-4 w-4 text-green-600" />
                          </div>
                          <span>New purchase</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        Michael Johnson
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        $1,250.00
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        Today, 10:30 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="bg-blue-100 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                            <Users className="h-4 w-4 text-blue-600" />
                          </div>
                          <span>New signup</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        Sarah Williams
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        -
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        Today, 9:15 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          New
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="bg-orange-100 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                            <ShoppingCart className="h-4 w-4 text-orange-600" />
                          </div>
                          <span>Subscription renewal</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        Robert Brown
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        $99.00
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        Yesterday, 4:45 PM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Showing 3 of 25 records
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
