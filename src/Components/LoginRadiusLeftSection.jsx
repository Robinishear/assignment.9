import React from 'react';
import { CheckCircle } from 'lucide-react';


const LoginRadiusLeftSection = () => {
    return (
        <div className="p-8 text-white bg-gray-900">
            <div className="flex items-center mb-6">
                {/* Replace with actual LoginRadius logo if available as a component */}
                <span className="text-2xl font-bold">loginradius</span>
            </div>
            <h1 className="mb-4 text-4xl font-semibold">
                Effortlessly add Login to your app
            </h1>
            <ul className="mb-8 space-y-4">
                <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 text-green-500" />
                    <span className="text-lg">
                        Implement passwordless, passkeys, and social logins in minutes, not hours
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 text-green-500" />
                    <span className="text-lg">
                        Design modern signup and login workflows: Progressive profiling, AI branding,
                        and No-code Orchestration
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 mt-1 text-green-500" />
                    <span className="text-lg">
                        Protect your app and users with bot protection, risk-based MFA and more
                    </span>
                </li>
            </ul>
            <div className="mt-12">
                <h3 className="mb-4 text-sm font-semibold text-gray-400">TRUSTED BY BRANDS WORLDWIDE</h3>
                <div className="flex flex-wrap gap-4">
                    {/* Replace these with actual logo components or images */}
                    <span className="text-gray-300">vX</span>
                    <span className="text-gray-300">NORTHUMBRIAN WATER</span>
                    <span className="text-gray-300">The Weather Network</span>
                    <span className="text-gray-300">arte</span>
                    <span className="text-gray-300">Ascen</span>
                </div>
            </div>
        </div>
    );
};

export default LoginRadiusLeftSection;
