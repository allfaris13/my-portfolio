import React from 'react';
import { Badge } from '@/components/ui/Badge';

const ReactHooksArticle = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
          React
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary leading-tight">
          Memahami React Hooks: useState dan useEffect
        </h1>
      </div>

      <div className="prose prose-invert prose-lg max-w-none text-gray-200 leading-relaxed space-y-6">
        <p className="text-xl text-gray-300 mb-8">
          React Hooks telah mengubah cara kita menulis komponen React. Dengan hooks, kita bisa menggunakan state dan lifecycle methods dalam functional components tanpa perlu class components.
        </p>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Apa itu React Hooks?</h2>
        <p>
          React Hooks adalah fungsi khusus yang memungkinkan kita untuk "hook into" fitur-fitur React dari functional components. 
          Hooks dimulai dengan kata "use" dan hanya bisa dipanggil di top level komponen atau custom hooks lainnya.
        </p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6">
          <h3 className="text-lg font-semibold text-purple-400 mb-3">Aturan Hooks:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>Hanya panggil hooks di top level function</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>Jangan panggil hooks dalam loops, conditions, atau nested functions</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>Hanya panggil hooks dari React functions</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">useState Hook</h2>
        <p>
          useState adalah hook paling dasar untuk mengelola state dalam functional component. 
          Hook ini mengembalikan array dengan dua elemen: nilai state saat ini dan fungsi untuk mengupdate state.
        </p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">useState dengan Object State</h3>
        <p>Ketika menggunakan object sebagai state, pastikan untuk membuat copy baru saat update:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  const updateName = (newName) => {
    setUser(prevUser => ({
      ...prevUser,
      name: newName
    }));
  };

  return (
    <div>
      <input 
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
        placeholder="Enter name"
      />
    </div>
  );
}`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Functional Updates</h3>
        <p>Gunakan functional update ketika state baru bergantung pada state sebelumnya:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`// ❌ Tidak disarankan
setCount(count + 1);

// ✅ Disarankan
setCount(prevCount => prevCount + 1);`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">useEffect Hook</h2>
        <p>
          useEffect menggabungkan componentDidMount, componentDidUpdate, dan componentWillUnmount dalam satu API. 
          Hook ini memungkinkan kita untuk melakukan side effects dalam functional components.
        </p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Effect function
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    // Cleanup function (optional)
    return () => {
      // Cleanup code here
      console.log('Cleanup for user:', userId);
    };
  }, [userId]); // Dependency array

  if (loading) return <div>Loading...</div>;
  return user ? <div>{user.name}</div> : <div>User not found</div>;
}`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Dependency Array Patterns</h3>
        
        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">1. Tanpa Dependency Array</h4>
              <code className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">useEffect(() =&gt; &#123;&#125;)</code>
              <p className="text-sm text-gray-400 mt-1">Effect run setiap render</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">2. Empty Dependency Array</h4>
              <code className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">useEffect(() =&gt; &#123;&#125;, [])</code>
              <p className="text-sm text-gray-400 mt-1">Effect hanya run sekali setelah mount</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-purple-300 mb-2">3. With Dependencies</h4>
              <code className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">useEffect(() =&gt; &#123;&#125;, [dep1, dep2])</code>
              <p className="text-sm text-gray-400 mt-1">Effect run ketika dependencies berubah</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-3">Cleanup Function</h3>
        <p>Cleanup function penting untuk mencegah memory leaks:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`useEffect(() => {
  // Subscribe to something
  const subscription = subscribeToSomething();
  
  // Timer
  const timer = setInterval(() => {
    console.log('Timer tick');
  }, 1000);

  // Event listener
  const handleResize = () => {
    console.log('Window resized');
  };
  window.addEventListener('resize', handleResize);

  // Cleanup function
  return () => {
    subscription.unsubscribe();
    clearInterval(timer);
    window.removeEventListener('resize', handleResize);
  };
}, []);`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Custom Hooks</h2>
        <p>Custom hooks memungkinkan kita untuk extract dan reuse stateful logic:</p>

        <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4 my-6 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`// Custom hook untuk fetch data
function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(\`/api/users/\${userId}\`);
        if (!response.ok) throw new Error('Failed to fetch');
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  return { user, loading, error };
}

// Penggunaan custom hook
function UserProfile({ userId }) {
  const { user, loading, error } = useUser(userId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return user ? <div>{user.name}</div> : <div>No user</div>;
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Best Practices</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">1. Pisahkan Concerns</h3>
            <p className="mb-3">Gunakan multiple useEffect untuk logic yang berbeda:</p>
            <div className="bg-black/50 rounded p-3">
              <pre className="text-sm text-gray-300">
                <code>{`// ✅ Pisahkan concerns
useEffect(() => {
  // Handle user data
}, [userId]);

useEffect(() => {
  // Handle window resize
}, []);`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">2. Avoid Infinite Loops</h3>
            <p className="mb-3">Hati-hati dengan dependency array:</p>
            <div className="bg-black/50 rounded p-3">
              <pre className="text-sm text-gray-300">
                <code>{`// ❌ Infinite loop
useEffect(() => {
  setUser({...user, updated: true});
}, [user]);

// ✅ Correct
useEffect(() => {
  setUser(prev => ({...prev, updated: true}));
}, []);`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-gray-900 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">3. Extract Custom Hooks</h3>
            <p>Extract logic yang reusable ke custom hooks untuk maintainability yang lebih baik.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-purple-300 mt-8 mb-4">Kesimpulan</h2>
        <p>
          React Hooks membuat kode lebih clean dan reusable. useState dan useEffect adalah fondasi yang harus dikuasai 
          sebelum mempelajari hooks lainnya seperti useContext, useReducer, dan useMemo.
        </p>
        
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-purple-300 mb-3">💡 Tips Tambahan</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>Gunakan ESLint plugin untuk React Hooks</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>Pelajari React DevTools untuk debugging hooks</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2">•</span>
              <span>Praktik dengan membuat custom hooks sendiri</span>
            </li>
          </ul>
        </div>

        <p className="text-lg text-purple-300 mt-8">
          Dengan memahami konsep dasar ini, Anda sudah siap untuk membangun aplikasi React yang lebih modern dan maintainable!
        </p>
      </div>
    </div>
  );
};

export default ReactHooksArticle;