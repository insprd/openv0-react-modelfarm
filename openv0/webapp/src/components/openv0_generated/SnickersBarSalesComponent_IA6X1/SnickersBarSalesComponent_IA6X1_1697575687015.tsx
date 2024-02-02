"use client";

import { Button } from '@/components/ui/button';
import { Image } from 'lucide-react';

const SnickersBarSalesComponent_IA6X1 = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white dark:bg-black p-4 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
      <Image className="w-32 h-32 mb-4" />
      <h2 className="text-xl text-gray-800 dark:text-white mb-2">Snickers Bar</h2>
      <span className="text-gray-600 dark:text-gray-300 mb-4">$1.99</span>
      <Button variant="outline" className="self-stretch">Add to Cart</Button>
    </div>
  );
};

export default SnickersBarSalesComponent_IA6X1;