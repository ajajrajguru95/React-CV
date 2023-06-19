import Sidebar from './components/Sidebar';
import MainBlock from './components/journey/MainBlock';

function App() {
  return (
    <div className="grid grid-cols-3 gap-7 container mx-auto font-base shadow-md bg-secondary">

      <div className="col-span-1 text-center p-5 border-r-2 border-primary">
        {/* Sidebar component */}
        <Sidebar />
      </div>


      <div className="col-span-2 p-5">
        {/* All experiences, academics etc */}
        <MainBlock />
      </div>

    </div>
  );
}

export default App;
