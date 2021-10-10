import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tile from "./tile";
// import Section from './section'
import { apps } from "../data/apps";

export default function TileList({ category }) {
  const [appsState, setAppsState] = useState(apps);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Apps</h2>
        <div className="flex flex-wrap justify-start lg:justify-between mx-auto w-1/2 py-10">
          <button
            className="bg-primary hover:bg-primary hover:text-white font-bold py-2 px-4 rounded focus:bg-gold focus:text-gold transition ease-out duration-700"
            onClick={() => {
              setAppsState(
                apps.filter((app) => app.category.includes("Featured"))
              );
            }}
          >
            Featured Apps
          </button>

          <button
            className="bg-white hover:bg-primary hover:text-white font-bold py-2 px-4 rounded focus:bg-primary focus:text-white"
            onClick={() => {
              setAppsState(apps);
            }}
          >
            All
          </button>
          <button
            className="bg-white hover:bg-primary hover:text-white font-bold py-2 px-4 rounded focus:bg-primary focus:text-white"
            onClick={() => {
              setAppsState(apps.filter((app) => app.category.includes("DeFi")));
            }}
          >
            DeFi
          </button>
          <button
            className="bg-white hover:bg-primary hover:text-white font-bold py-2 px-4 rounded focus:bg-primary focus:text-white"
            onClick={() => {
              setAppsState(
                apps.filter((app) => app.category.includes("Wallet"))
              );
            }}
          >
            Wallet
          </button>
          <button
            className="bg-white hover:bg-primary hover:text-white font-bold py-2 px-4 rounded focus:bg-primary focus:text-white"
            onClick={() => {
              setAppsState(apps.filter((app) => app.category.includes("NFT")));
            }}
          >
            NFT
          </button>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-10">
          {appsState.map((app) => (
            <div
              key={app.id}
              className="relative group bg-grey-100 bg-cover bg-center p-2 rounded ring-2 ring-gray-200 shadow-md group-hover:opacity-75"
            >
              <Tile app={app} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

TileList.propTypes = {
  category: PropTypes.string.isRequired,
};
