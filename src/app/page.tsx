'use client'
import React from 'react';
import useStore from "@/Store";
import Starter from "@/components/Starter/Starter";
import Catalog from "@/components/Catalog/Catalog";

export default function Home() {

    const showCatalog = useStore((state:any) => state.ShowCatalog)

    return (
        <main className="flex flex-col items-center">
            <Starter/>
                {showCatalog && <Catalog/>}
        </main>
    );
};