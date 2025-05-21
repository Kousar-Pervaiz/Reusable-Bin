
import React from 'react';
import BinBox from './components/BinBox';

const App = () => {
  return (
    <div className="bg-white min-h-screen w-screen">

      <div className="w-full px-4 md:px-8 lg:px-16 pb-0">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl text-teal-700 font-medium">Sehat Sanjha 1.6.52 (Prod)</h1>
          <button className="bg-black text-white px-4 py-1 rounded">Logout</button>
        </div>

        {/* Visit Token Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Visit Token"
            className="p-2 border border-gray-300 rounded w-full placeholder-gray-500"
          />
        </div>


        {/* Main layout with bins */}
        <div className="grid grid-cols-3 gap-4">

          <div>
            <BinBox title="Social History" >
              <div className="text-gray-700">
                <div className="mb-2">Marital Status</div>
                <div className="mb-2">Identity</div>
                <div className="mb-2">Occupation</div>
                <div className="mb-2">Education</div>

                <div className="my-4"></div>

                <div className="mb-2">Dietary Habits</div>
                <div className="mb-2">Exercise</div>
                <div className="mb-2">Routine</div>
                <div className="mb-2">Sleep</div>
                <div className="mb-2">Stress</div>
              </div>
            </BinBox>

            <BinBox title="Past Medical Hx" >
              <div className="text-gray-700">No Known Diseases</div>
            </BinBox>
          </div>


          <div>
            <BinBox title="History of Presenting Illness" color="#1d7a4a">

            </BinBox>
          </div>


          <div>
            <BinBox title="Allergies" >
              <div className="text-gray-700">No Known Allergies</div>
            </BinBox>

            <BinBox title="Medicines" >
              <div className="text-gray-700">No Medicines found</div>
            </BinBox>

            {/* Done button */}
            <div className="mt-6 text-right">
              <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded">
                Done with Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;