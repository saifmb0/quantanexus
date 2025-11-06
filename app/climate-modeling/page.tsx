import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CloudRain, Waves, Wind, AlertTriangle } from 'lucide-react';

export default function ClimateModelingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Earth&apos;s Climate Crystal Ball
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Harness quantum computing to predict climate patterns with unprecedented accuracy
          </p>
        </div>
      </section>

      {/* Top Stats */}
      <section className="px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <CloudRain className="w-10 h-10 text-orange-500 mb-4" />
            <div className="text-3xl font-bold text-white mb-2">+2.4°C</div>
            <div className="text-sm text-gray-400">Global Temp Rise</div>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <Waves className="w-10 h-10 text-blue-500 mb-4" />
            <div className="text-3xl font-bold text-white mb-2">+45cm</div>
            <div className="text-sm text-gray-400">Sea Level Rise</div>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
            <div className="text-3xl font-bold text-white mb-2">18%</div>
            <div className="text-sm text-gray-400">Extreme Storms</div>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <Wind className="w-10 h-10 text-cyan-500 mb-4" />
            <div className="text-3xl font-bold text-white mb-2">12%</div>
            <div className="text-sm text-gray-400">Wind Pattern Shift</div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <section className="px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Climate Simulation */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Interactive Climate Simulation</h3>
            
            {/* Simulation Controls */}
            <div className="mb-8">
              <label className="block text-sm text-gray-400 mb-2">Time Horizon (Years)</label>
              <input 
                type="range" 
                min="10" 
                max="100" 
                defaultValue="50"
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>10</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>

            {/* Global Climate Model Visualization */}
            <div className="relative h-64 bg-black/40 rounded-lg border border-white/5 mb-6 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20" />
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-30 blur-2xl animate-pulse" />
              <div className="absolute text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Earth
                </div>
                <div className="text-sm text-gray-400 mt-2">Global Climate Model</div>
              </div>
            </div>

            {/* Run Simulation Button */}
            <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
              Run Quantum Simulation
            </button>
          </div>

          {/* Right Panel - At-Risk Regions */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">At-Risk Regions</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Miami, USA</span>
                  <span className="text-red-400 font-semibold">94% Risk</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-500 to-red-500" style={{ width: '94%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Venice, Italy</span>
                  <span className="text-orange-400 font-semibold">89% Risk</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500" style={{ width: '89%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Mumbai, India</span>
                  <span className="text-orange-400 font-semibold">85% Risk</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500" style={{ width: '85%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Jakarta, Indonesia</span>
                  <span className="text-yellow-400 font-semibold">78% Risk</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-yellow-500" style={{ width: '78%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Amsterdam, Netherlands</span>
                  <span className="text-yellow-400 font-semibold">72% Risk</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-yellow-500" style={{ width: '72%' }} />
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-blue-300">
                <strong>Note:</strong> Risk percentages based on quantum-enhanced climate models analyzing sea level rise, storm frequency, and infrastructure vulnerability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Stats */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.7%</div>
            <div className="text-sm text-gray-300">Model Accuracy</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">1000x</div>
            <div className="text-sm text-gray-300">Faster Than Classical</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50TB</div>
            <div className="text-sm text-gray-300">Climate Data Analyzed</div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
