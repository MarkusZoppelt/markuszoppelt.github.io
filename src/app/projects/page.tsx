import Layout from '@/components/Layout';

export default function Projects() {
  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-gray-100">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-20" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100">
              Projects
            </h1>
            <p className="text-xl text-gray-300/90">A collection of my software projects and research work</p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* cifuzz */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-[#1a1a1a] p-8 rounded-xl border border-gray-800/50 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-100">
                    <a
                      href="https://www.code-intelligence.com/product-ci-fuzz"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      cifuzz
                    </a>
                  </h3>
                  <p className="text-gray-300/90 mb-4">
                    A CLI tool that helps you integrate and run fuzz tests in your project.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#2a2a2a] text-gray-300/90 rounded-full text-sm border border-gray-700/50">Fuzzing</span>
                    <span className="px-3 py-1 bg-[#2a2a2a] text-gray-300/90 rounded-full text-sm border border-gray-700/50">Security</span>
                  </div>
                </div>
              </div>

              {/* portfolio_rs */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-[#1a1a1a] p-8 rounded-xl border border-gray-800/50 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-100">
                    <a
                      href="https://github.com/MarkusZoppelt/portfolio_rs"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      portfolio_rs
                    </a>
                  </h3>
                  <p className="text-gray-300/90 mb-4">
                    A simple command line tool for managing investment portfolios, written in Rust.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#2a2a2a] text-gray-300/90 rounded-full text-sm border border-gray-700/50">Rust</span>
                    <span className="px-3 py-1 bg-[#2a2a2a] text-gray-300/90 rounded-full text-sm border border-gray-700/50">Finance</span>
                  </div>
                </div>
              </div>

              {/* yubikey-otp */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-[#1a1a1a] p-8 rounded-xl border border-gray-800/50 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-100">
                    <a
                      href="https://github.com/MarkusZoppelt/yubikey-otp"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      yubikey-otp
                    </a>
                  </h3>
                  <p className="text-gray-300/90 mb-4">
                    Fuzzy search for TOTP (oath) secrets on your YubiKey and copy them to your clipboard.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#2a2a2a] text-gray-300/90 rounded-full text-sm border border-gray-700/50">Security</span>
                    <span className="px-3 py-1 bg-[#2a2a2a] text-gray-300/90 rounded-full text-sm border border-gray-700/50">CLI</span>
                  </div>
                </div>
              </div>

              {/* Hexagon Hamlet */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-[#1a1a1a] p-8 rounded-xl border border-gray-800/50 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-100">
                    <a
                      href="https://github.com/MarkusZoppelt/Hexagon-Hamlet"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hexagon Hamlet
                    </a>
                  </h3>
                  <p className="text-gray-300/90 mb-4">
                    A city-builder game for iOS built with Unity - a joint work with{' '}
                    <a
                      href="https://twinfox.itch.io/"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twinfox
                    </a>{' '}
                    and{' '}
                    <a
                      href="https://fabian-fuchs.itch.io/"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fabian Fuchs
                    </a>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#2a2a2a] text-gray-300/90 rounded-full text-sm border border-gray-700/50">Unity</span>
                    <span className="px-3 py-1 bg-[#2a2a2a] text-gray-300/90 rounded-full text-sm border border-gray-700/50">Game Dev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 