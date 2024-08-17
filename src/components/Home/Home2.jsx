import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <header className="bg-blue-600 text-white w-full py-4">
        <h1 className="text-center text-3xl font-bold">Welcome to My Website</h1>
      </header>
      
      <main className="flex flex-col md:flex-row items-center justify-around w-full flex-1 p-4">
        <section className="bg-white rounded-lg shadow-lg p-6 m-4 w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-2">Section 1</h2>
          <p className="text-gray-700">This is the first section. Add your content here.</p>
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-6 m-4 w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-2">Section 2</h2>
          <p className="text-gray-700">This is the second section. Add your content here.</p>
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-6 m-4 w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-2">Section 3</h2>
          <p className="text-gray-700">This is the third section. Add your content here.</p>
        </section>
      </main>
      
      <footer className="bg-blue-600 text-white w-full py-4">
        <p className="text-center">&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
