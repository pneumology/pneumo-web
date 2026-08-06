"use client";
import { useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
    // purely informational: no localStorage or persistent side-effects
    const [visible, setVisible] = useState(true);

    function accept() {
        // only hide for this session (no storage)
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50">
            <div className="max-w-3xl mx-4 bg-white border rounded px-3 py-2.5 w-full mt-2.5 shadow-md text-black">
                <div className="grid grid-cols-[1fr_auto] gap-x-3 items-center">
                    <div className="flex-1 text-sm">
                        <p className="mb-2">
                            Es werden keinerlei Cookies verwendet oder Daten gespeichert. 
                            Mehr dazu in unserer{' '}
                            <Link href="/datenschutz" className="underline">
                                Datenschutzerklärung
                            </Link>
                            .
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <button
                            onClick={accept}
                            className="bg-black text-white px-4 py-2 rounded font-medium"
                        >
                            Okay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
