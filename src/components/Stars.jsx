function Stars() {

  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">

      {[...Array(60)].map((_, i) => (

        <span
          key={i}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
          }}
        />

      ))}

    </div>
  );
}

export default Stars;