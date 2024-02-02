"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

const MusicAlbumHeroSection_U6DAC = () => {
   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full space-y-8">
        <CardHeader>
          <img className="mx-auto h-12 w-auto rounded-lg"
            src="https://m.media-amazon.com/images/I/71ickPyYGxL._UF894,1000_QL80_.jpg"
            alt="Album Cover"/>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Ultraviolence
          </h2>
        </CardHeader>
        <CardContent>
            <CardTitle className="mt-2 text-center text-2xl text-gray-900 dark:text-white">Lana Del Rey</CardTitle>
            <CardDescription className="mt-2 text-center text-lg text-gray-600 dark:text-gray-300">
              New Album Released
            </CardDescription>
        </CardContent>
        <div className="flex items-center justify-center">
            <Button className="relative bg-indigo-600 hover:bg-indigo-700">
               <PlayCircle className="h-5 w-5 text-white" aria-hidden="true" />
               <span className="absolute inset-0 object-right-top -mr-6">
                <svg className="absolute inset-0 h-full w-full text-indigo-500" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <polygon points="26 16 2 32 29 16 2 0 26 16"></polygon>
                </svg>
              </span>
              <span className="relative">Play the Album</span>
            </Button>
        </div>
      </Card>
    </div>
  );
};

export default MusicAlbumHeroSection_U6DAC;