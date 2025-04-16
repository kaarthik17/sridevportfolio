export default function ContactPage() {
    return (
      <section className="max-w-xl mx-auto mt-10 px-4">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Feel free to reach out to me via email:
        </p>
        <a
          href="mailto:srinivasang34@yahoo.com"
          className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
        >
          srinivasang34@yahoo.com
        </a>
      </section>
    );
  }