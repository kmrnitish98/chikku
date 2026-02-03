import React from 'react';
import { timelineData } from '../data/months';
import MonthCard from './MonthCard';
import BirthdayHighlight from './BirthdayHighlight';
import BirthdayFinale from './BirthdayFinale';
import Timeline from './Timeline';

const RoadmapPage = () => {
    const [birthday, ...journey] = timelineData;

    return (
        <div className="min-h-screen bg-dark text-white overflow-hidden pb-20">
            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header Section */}
                <header className="py-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
                        <span className="text-white">The</span>{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Journey
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Reviewing a magical year of growth, memories, and joy. From February 2025 to February 2026.
                    </p>
                </header>

                {/* Birthday Highlight Component */}
                <div className="mb-24">
                    <BirthdayHighlight data={birthday} />
                </div>

                {/* Timeline Section */}
                <div className="relative">
                    <Timeline />

                    <div className="space-y-12 md:space-y-24">
                        {journey.map((item, index) => (
                            <div key={item.id} className="flex justify-center md:block">
                                <MonthCard
                                    data={item}
                                    index={index}
                                    align={index % 2 === 0 ? 'left' : 'right'}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Grand Finale */}
                    <BirthdayFinale />
                </div>

                {/* Footer */}
                <footer className="text-center mt-32 text-gray-500 text-sm">
                    <p>Made with ❤️ for Chhiku</p>
                </footer>
            </div>
        </div>
    );
};

export default RoadmapPage;
