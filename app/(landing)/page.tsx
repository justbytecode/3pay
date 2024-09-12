"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Wallet, ShieldCheck, Zap, Globe, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      icon: Wallet,
      title: "Seamless Transactions",
      description: "Execute payments with a single click",
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Security",
      description: "Blockchain-powered protection for every transaction",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Near-instantaneous payment processing",
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Borderless payments accessible from anywhere",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href={"/"}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-800 to-orange-600"
            >
              3Pay
            </motion.div>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-6"
          >
            <a
              href="/features"
              className="text-gray-300 text-xl hover:bg-gray-800 rounded p-2 hover:text-white transition duration-300"
            >
              Features
            </a>
            <a
              href="/document"
              className="text-gray-300 text-xl hover:bg-gray-800 rounded p-2 hover:text-white transition duration-300"
            >
              Docs
            </a>
          </motion.div>
          <Link href={"dashboard"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Get Started
            </motion.button>
          </Link>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 mb-10 lg:mb-0"
            >
              <h1 className="text-5xl font-bold mb-6">
                Revolutionize Payments with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-700">
                  Web3
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Experience lightning-fast, secure, and borderless transactions
                with our cutting-edge Web3 payment gateway.
              </p>
              <Link href={"/dashboard"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
              >
                Start Integrating Now
              </motion.button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg filter blur-xl"
                />
                <div className="relative bg-gray-800 rounded-lg p-6 shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-semibold">Payment Amount</div>
                    <div className="text-2xl font-bold">1.5 ETH</div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4 mb-4">
                    <div className="text-sm text-gray-400 mb-2">
                      Recipient Address
                    </div>
                    <div className="text-sm font-mono">
                      0x742d35Cc6634C0532925a3b844Bc454e4438f44e
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-yellow-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                  >
                    Confirm Payment
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose CryptoFlow?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-700 p-6 rounded-lg text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="text-cyan-400 mx-auto mb-4"
                  >
                    <feature.icon size={40} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-8"
          >
            <h2 className="text-3xl bg-gray-900 rounded p-4 font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "What cryptocurrencies do you support?",
                  answer:
                    "We support a wide range of cryptocurrencies including Bitcoin, Ethereum, and other popular altcoins.",
                },
                {
                  question: "How secure is your payment gateway?",
                  answer:
                    "Our payment gateway uses state-of-the-art encryption and blockchain technology to ensure the highest level of security for all transactions.",
                },
                {
                  question: "What are the transaction fees?",
                  answer:
                    "Our fees are competitive and transparent. They vary depending on the cryptocurrency and transaction volume. Please check our pricing page for detailed information.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    backgroundColor: isOpen ? "rgb(55 65 81)" : "rgb(31 41 55)",
                  }}
                  className="rounded-lg overflow-hidden"
                >
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-between items-center w-full p-4 text-left"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`transform transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </motion.button>
                  <motion.div
                    initial="collapsed"
                    animate={isOpen ? "open" : "collapsed"}
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-gray-400"
                  >
                    {faq.answer}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="bg-gradient-to-r from-cyan-500 to-purple-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              Ready to embrace the future of payments?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-8"
            >
              Join thousands of businesses already using CryptoFlow to process
              their Web3 transactions.
            </motion.p>
            
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; 2023 CryptoFlow. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="privacy-policy"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/term-of-services"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
