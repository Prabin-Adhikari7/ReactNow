export default function Card({ imageSrc, title, subtitle, description }) {
    return (
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img 
          src={imageSrc} 
          alt={title} 
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500" 
        />  
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {subtitle}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    );
  }

  