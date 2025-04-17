import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-gray-100">
        {/* Hero Section */}
        <section className="relative py-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-20" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100">
              Dr. Markus Zoppelt
            </h1>
            <p className="text-xl text-gray-300/90">Software Engineer & Researcher</p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-transparent rounded-xl" />
              <div className="relative p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-100">About Me</h2>
                <p className="text-gray-300/90 text-lg leading-relaxed">
                  I'm a software engineer at{' '}
                  <a
                    href="https://www.code-intelligence.com/"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code Intelligence
                  </a>
                  , where I focus on developing CLI fuzz testing tools and pushing the boundaries of automated security testing. With a PhD in Computer Science from FAU, specializing in security research at the Chair of Applied Cryptography (
                  <a
                    href="https://www.chaac.tf.fau.eu/"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ChaAC
                  </a>
                  ), I bring both academic depth and practical expertise to my work. You can find my open-source contributions on{' '}
                  <a
                    href="https://github.com/MarkusZoppelt"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Software Projects Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Software Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
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
            <p className="text-center text-gray-400 mt-8">...and many more</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Get in Touch</h2>
            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/markuszoppelt"
                className="relative group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-3 rounded-full bg-[#1a1a1a] border border-gray-800/50">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6 text-gray-300/90 group-hover:text-gray-100 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/markuszoppelt"
                className="relative group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative p-3 rounded-full bg-[#1a1a1a] border border-gray-800/50">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6 text-gray-300/90 group-hover:text-gray-100 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 