import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Tile from "./tile";
import { apps } from "../data/apps";

export default function TileList() {
  const [appsState, setAppsState] = useState(apps);
  const [filter, setFilter] = useState("All");

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <RadioGroup value={filter} onChange={setFilter}>
        <div className="flex flex-wrap justify-start sm:justify-center mx-auto w-2/3 py-10">
          <RadioGroup.Option value="Featured Apps">
            {({ checked }) => (
              <button
                className={
                  checked
                    ? "bg-buttonPrimary text-white font-bold py-2 px-4 rounded"
                    : "text-white hover:bg-buttonPrimary hover:text-white font-bold py-2 px-4 rounded"
                }
                onClick={() => {
                  let tmpApps = apps.filter((app) =>
                    app.category.includes("Featured")
                  );
                  setAppsState(tmpApps);
                }}
              >
                Featured Apps (
                {apps.filter((app) => app.category.includes("Featured")).length}
                )
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
                All ({apps.length})
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
                  let tmpApps = apps.filter((app) =>
                    app.category.includes("DeFi")
                  );
                  setAppsState(tmpApps);
                }}
              >
                DeFi (
                {apps.filter((app) => app.category.includes("DeFi")).length})
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
                  let tmpApps = apps.filter((app) =>
                    app.category.includes("Wallet")
                  );
                  setAppsState(tmpApps);
                }}
              >
                Wallet (
                {apps.filter((app) => app.category.includes("Wallet")).length})
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
                  let tmpApps = apps.filter((app) =>
                    app.category.includes("NFT")
                  );
                  setAppsState(tmpApps);
                }}
              >
                NFT ({apps.filter((app) => app.category.includes("NFT")).length}
                )
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
                  let tmpApps = apps.filter((app) =>
                    app.category.includes("Gaming")
                  );
                  setAppsState(tmpApps);
                }}
              >
                Gaming (
                {apps.filter((app) => app.category.includes("Gaming")).length})
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
                  let tmpApps = apps.filter((app) =>
                    app.category.includes("Dev")
                  );
                  setAppsState(tmpApps);
                }}
              >
                Dev ({apps.filter((app) => app.category.includes("Dev")).length}
                )
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
                  let tmpApps = apps.filter((app) =>
                    app.category.includes("Tool")
                  );
                  setAppsState(tmpApps);
                }}
              >
                Tool (
                {apps.filter((app) => app.category.includes("Tool")).length})
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
                  let tmpApps = apps.filter((app) =>
                    app.category.includes("Corporate")
                  );
                  setAppsState(tmpApps);
                }}
              >
                Corporate (
                {
                  apps.filter((app) => app.category.includes("Corporate"))
                    .length
                }
                )
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
                  let tmpApps = apps.filter((app) =>
                    app.category.includes("Open Source")
                  );
                  setAppsState(tmpApps);
                }}
              >
                Open Source (
                {
                  apps.filter((app) => app.category.includes("Open Source"))
                    .length
                }
                )
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
