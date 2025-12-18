"use client";

import { CodeBlock } from "./CodeBlock";


export default function CodeBlockComponent() {
  const readme = `
# A few notes on code and file structure
 ** I'm a strong believer in type safety and intelisense. ** 
 ** I believe all functions (with exceptions) should have high cohesion. ** 
 ** Folder structure theory. I believe a folder structure should: ** 
 - Be clearly organized.
 - Be well communicated and documented.
 - Be modular where appropriate.
 - Refrain from high coupling.
 - Have share permissions for each folder.
 - Be enforced with a linter for larger projects.
 `;

  const constants = `
export const DEBUG = process.env.NODE_ENV !== "production";
export const BASE_API_URL = "https://someapi.com/api/v1/";
`;

  const types = `
export type ResourceTypes = "someApiResource1" | "someApiResource2" | "someApiResource3";
export type ApiType = {
  url: string;
  resource: ResourceTypes;
  searchParams: Record<string, string>;
};
`;

  const utils =
    `
/**
 * * Utility function to get the URL string from an object
 * @param obj - The object containing the URL and search parameters
 * @returns The URL string with search parameters
 */
export const getUrlStringFromObject = (obj: ApiType) => {
//...
}

/**
 * * Utility to fetch data from a search URL
 * @param searchUrl - The URL string to fetch data from
 * @returns The data fetched from the URL
 */
export const getDataFromSearchUrl = async (searchUrl: string) => {
  // Return a generic error if the fetch fails
  try {
    const response = await fetch(searchUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: ` +
    "Bearer${process.env.PUBLIC_API_KEY}" +
    `,
      },
      body: JSON.stringify(searchUrl),
    });

    // Parse the response
    const data = await response.json();
    if (!response.ok) {
      if (DEBUG) console.debug("getListFromSearch data", data);
      throw new Error(data.error || "Failed to fetch data");
    }
    return data.objectIDs;
  } catch (error) {
    if (DEBUG) console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
};

//...
`;

  const component = `
const ListItem = ({ item }: { item: ApiType }) => {
//...
};

const ApiPage = () => {
//...
}
`;

  return (
    <div className="mx-auto flex flex-col gap-4 w-full max-w-6xl py-16 px-4">
      <h1 className="text-4xl font-semibold text-center p-2 m-0">
        All the code, tested and delevered, yours to keep.
      </h1>

      <CodeBlock language="ts" filename="constants.ts" code={constants} />
      <CodeBlock language="ts" filename="types.ts" code={types} />
      <CodeBlock
        language="ts"
        filename="utils.ts"
        highlightLines={[8, 42]}
        code={utils}
      />
      <CodeBlock
        language="tsx"
        filename="ApiPage.tsx"
        highlightLines={[3, 7]}
        code={component}
      />
    </div>
  );
}
