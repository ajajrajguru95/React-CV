import Sidebar from './components/Sidebar';
import MainBlock from './components/journey/MainBlock';

function App() {
  return (
    <div className="grid grid-cols-3 container mx-auto font-base shadow-md bg-secondary my-8">

      <div className="col-span-1 text-center p-5 border-r-2 border-primary">
        {/* Sidebar component */}
        <Sidebar />
      </div>


      <div className="col-span-2 py-8">
        {/* All experiences, academics etc */}
        <MainBlock />
      </div>

    </div>
  );
}

export default App;
