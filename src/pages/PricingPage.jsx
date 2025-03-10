import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const [packages, setPackages] = useState(null);
  const [curTab, setCurTab] = useState(packages ? packages[0]?.title : null);

  useEffect(() => {
    fetch("newDataSets.json")
      .then((res) => res.json())
      .then((data) => {
        setCurTab(data[0]?.title);
        setPackages(data);
      });
  }, []);
  console.log(curTab);

  return (
    <div className="w-[80%] mx-auto py-20 flex flex-col">
      {/* name of each tab group should be unique */}
      {packages && (
        <>
          <div className="tabs tabs-lift tabs-lg">
            {packages.map((items) => (
              <>
                <input
                  type="radio"
                  name={items?.title}
                  className="tab"
                  aria-label={items?.title}
                  onClick={() => setCurTab(items?.title)}
                  checked={curTab === items?.title}
                />
                <div className="tab-content bg-base-50 border-base-300 p-6">
                  <div className="flex flex-wrap gap-4">
                    {(items.packages).map((item) => (
                      <>
                        <div class="basis-96 grow bg-base-300 rounded md:w-64">
                          <h3 class="p-4 text-sm font-semibold text-gray-600 uppercase">
                            {item}
                          </h3>

                          <div class="bg-base-200 flex items-center justify-between px-3 py-2">
                            <Link to={'/plan'} class="w-full btn rounded-lg text-white uppercase transition-colors duration-300 transform bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none">
                              Get Started
                            </Link>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PricingPage;
