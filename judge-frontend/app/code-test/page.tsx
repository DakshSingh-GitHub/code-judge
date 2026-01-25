"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import CodeEditor from "../components/Editor/CodeEditor";
import { useAppContext } from "../lib/context";

export default function Code() {
    const [positions, setPositions] = useState<{ top: string; left: string }[]>(
        [],
    );
    const [code, setCode] = useState("#Write your code here");
    const [selectedProblemId, setSelectedProblemId] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { isSidebarOpen, setIsSidebarOpen, TITLE, isDark } = useAppContext();

    useEffect(() => {
        const newPositions = [...Array(6)].map(() => ({
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
        }));
        setPositions(newPositions);
    }, []);

    return (
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-6 text-center select-none overflow-hidden relative min-h-0 gap-10 mx-10">
            <motion.div className="w-1/2 h-full">
                <div className="flex-1 h-full border-2 border-gray-700 rounded-4xl">
                    <CodeEditor
                        code={code}
                        setCode={setCode}
                        isDisabled={false}
                        isDark={true}
                    />
                </div>
            </motion.div>
            <motion.div className="w-1/2 h-full">
                <div className="flex-1 h-full dark:bg-gray-800/50 rounded-4xl">
                    
                </div>
            </motion.div>
        </div>
    );
}
