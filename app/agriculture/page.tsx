import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Droplets, TrendingUp, Leaf, AlertCircle, CheckCircle } from 'lucide-react';

export default function AgriculturePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Smarter Farming for the Future
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Quantum-powered precision agriculture for maximum yield and sustainability
          </p>
        </div>
      </section>

      {/* Top Stats */}
      <section className="px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <Droplets className="w-10 h-10 text-blue-500 mb-4" />
            <div className="text-3xl font-bold text-white mb-2">43%</div>
            <div className="text-sm text-gray-400">Water Saved</div>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <TrendingUp className="w-10 h-10 text-green-500 mb-4" />
            <div className="text-3xl font-bold text-white mb-2">+28%</div>
            <div className="text-sm text-gray-400">Crop Yield Increase</div>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <Leaf className="w-10 h-10 text-emerald-500 mb-4" />
            <div className="text-3xl font-bold text-white mb-2">-62%</div>
            <div className="text-sm text-gray-400">Fertilizer Usage</div>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <AlertCircle className="w-10 h-10 text-amber-500 mb-4" />
            <div className="text-3xl font-bold text-white mb-2">94%</div>
            <div className="text-sm text-gray-400">Early Detection Rate</div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Field Analysis */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Field Analysis Dashboard</h3>
            
            {/* Field Tabs */}
            <div className="flex gap-2 mb-6">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium">
                North
              </button>
              <button className="px-4 py-2 bg-white/5 text-gray-400 hover:bg-white/10 rounded-lg font-medium transition-colors">
                South
              </button>
              <button className="px-4 py-2 bg-white/5 text-gray-400 hover:bg-white/10 rounded-lg font-medium transition-colors">
                East
              </button>
              <button className="px-4 py-2 bg-white/5 text-gray-400 hover:bg-white/10 rounded-lg font-medium transition-colors">
                West
              </button>
            </div>

            {/* Satellite Analysis Visualization */}
            <div className="relative h-64 bg-black/40 rounded-lg border border-white/5 mb-6 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20" />
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 opacity-30 blur-2xl animate-pulse" />
              <div className="absolute text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  North Field
                </div>
                <div className="text-sm text-gray-400">Real-time satellite analysis</div>
              </div>
            </div>

            {/* Sub-stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">78%</div>
                <div className="text-xs text-gray-400">Soil Moisture</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">92%</div>
                <div className="text-xs text-gray-400">Crop Health</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">High</div>
                <div className="text-xs text-gray-400">Yield Potential</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300">
                Optimize Irrigation
              </button>
              <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                Schedule Tasks
              </button>
            </div>
          </div>

          {/* Right Panel - Tasks & Alerts */}
          <div className="space-y-6">
            {/* Today's Tasks */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Today&apos;s Tasks</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-white font-medium">Water North Field</div>
                    <div className="text-sm text-gray-400">Scheduled: 6:00 AM</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-white font-medium">Apply Fertilizer - East Field</div>
                    <div className="text-sm text-gray-400">Scheduled: 9:00 AM</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg border border-blue-500/30">
                  <div className="w-5 h-5 rounded-full border-2 border-blue-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-white font-medium">Pest Inspection - South Field</div>
                    <div className="text-sm text-gray-400">Scheduled: 2:00 PM</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-white font-medium">Harvest Assessment - West Field</div>
                    <div className="text-sm text-gray-400">Scheduled: 5:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Active Alerts</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-white font-medium">Low Moisture - West Field</div>
                    <div className="text-sm text-amber-300">Action required within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-white font-medium">Optimal Harvest Window</div>
                    <div className="text-sm text-blue-300">North Field ready in 3-5 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Stats */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">$127K</div>
            <div className="text-sm text-gray-300">Annual Cost Savings</div>
          </div>
          
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-amber-400 mb-2">89%</div>
            <div className="text-sm text-gray-300">Disease Prevention Rate</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">2,400</div>
            <div className="text-sm text-gray-300">Acres Under Management</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
