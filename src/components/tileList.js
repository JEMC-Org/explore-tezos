import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Tile from "./tile";
import { apps } from "../data/apps";

export default function TileList() {
  const [appsState, setAppsState] = useState(apps);
  const [filter, setFilter] = useState("All");

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <p className="px-2 flex justify-center align-middle text-descriptions text-sm">
        We have changed the website to use dark mode because as Albert Einstein
        once said, &quot;Who the fuk uses light mode&quot;.
      </p>
      <RadioGroup value={filter} onChange={setFilter}>
        <div className="flex flex-wrap justify-start lg:justify-between mx-auto w-3/4 py-10">
          <RadioGroup.Option value="Featured Apps">
            {({ checked }) => (
              <button
                className={
                  checked
                    ? "bg-buttonPrimary text-white font-bold py-2 px-4 rounded"
                    : "text-white hover:bg-buttonPrimary hover:text-white font-bold py-2 px-4 rounded"
                }
                onClick={() => {
                  setAppsState(
                    apps.filter((app) => app.category.includes("Featured"))
                  );
                }}
              >
                Featured Apps
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="All">
            {({ checked }) => (
              <button
                className={
                  checked
                    ? "bg-buttonPrimary text-white font-bold py-2 px-4 rounded"
                    : "text-white hover:bg-buttonPrimary hover:text-white font-bold py-2 px-4 rounded"
                }
                onClick={() => {
                  setAppsState(apps);
                }}
              >
                All
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="DeFi">
            {({ checked }) => (
              <button
                className={
                  checked
                    ? "bg-buttonPrimary text-white font-bold py-2 px-4 rounded"
                    : "text-white hover:bg-buttonPrimary hover:text-white font-bold py-2 px-4 rounded"
                }
                onClick={() => {
                  setAppsState(
                    apps.filter((app) => app.category.includes("DeFi"))
                  );
                }}
              >
                DeFi
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="Wallet">
            {({ checked }) => (
              <button
                className={
                  checked
                    ? "bg-buttonPrimary text-white font-bold py-2 px-4 rounded"
                    : "text-white hover:bg-buttonPrimary hover:text-white font-bold py-2 px-4 rounded"
                }
                onClick={() => {
                  setAppsState(
                    apps.filter((app) => app.category.includes("Wallet"))
                  );
                }}
              >
                Wallet
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="NFT">
            {({ checked }) => (
              <button
                className={
                  checked
                    ? "bg-buttonPrimary text-white font-bold py-2 px-4 rounded"
                    : "text-white hover:bg-buttonPrimary hover:text-white font-bold py-2 px-4 rounded"
                }
                onClick={() => {
                  setAppsState(
                    apps.filter((app) => app.category.includes("NFT"))
                  );
                }}
              >
                NFT
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="Gaming">
            {({ checked }) => (
              <button
                className={
                  checked
                    ? "bg-buttonPrimary text-white font-bold py-2 px-4 rounded"
                    : "text-white hover:bg-buttonPrimary hover:text-white font-bold py-2 px-4 rounded"
                }
                onClick={() => {
                  setAppsState(
                    apps.filter((app) => app.category.includes("Gaming"))
                  );
                }}
              >
                Gaming
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="Dev">
            {({ checked }) => (
              <button
                className={
                  checked
                    ? "bg-buttonPrimary text-white font-bold py-2 px-4 rounded"
                    : "text-white hover:bg-buttonPrimary hover:text-white font-bold py-2 px-4 rounded"
                }
                onClick={() => {
                  setAppsState(
                    apps.filter((app) => app.category.includes("Dev"))
                  );
                }}
              >
                Dev
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="Tool">
            {({ checked }) => (
              <button
                className={
                  checked
                    ? "bg-buttonPrimary text-white font-bold py-2 px-4 rounded"
                    : "text-white hover:bg-buttonPrimary hover:text-white font-bold py-2 px-4 rounded"
                }
                onClick={() => {
                  setAppsState(
                    apps.filter((app) => app.category.includes("Tool"))
                  );
                }}
              >
                Tool
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="Corporate">
            {({ checked }) => (
              <button
                className={
                  checked
                    ? "bg-buttonPrimary text-white font-bold py-2 px-4 rounded"
                    : "text-white hover:bg-buttonPrimary hover:text-white font-bold py-2 px-4 rounded"
                }
                onClick={() => {
                  setAppsState(
                    apps.filter((app) => app.category.includes("Corporate"))
                  );
                }}
              >
                Corporate
              </button>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="Open Source">
            {({ checked }) => (
              <button
                className={
                  checked
                    ? "bg-buttonPrimary text-white font-bold py-2 px-4 rounded"
                    : "text-white hover:bg-buttonPrimary hover:text-white font-bold py-2 px-4 rounded"
                }
                onClick={() => {
                  setAppsState(
                    apps.filter((app) => app.category.includes("Open Source"))
                  );
                }}
              >
                Open Source
              </button>
            )}
          </RadioGroup.Option>
        </div>
      </RadioGroup>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-10">
        {appsState.map((app) => (
          <div
            key={app.name}
            className="relative group bg-secondary bg-cover bg-center p-5 rounded shadow-md group-hover:opacity-75"
          >
            <Tile app={app} />
          </div>
        ))}
      </div>
    </div>
  );
}
