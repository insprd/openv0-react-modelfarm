import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Heart } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Repeat2 } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
"use client";

const Tweet_QUGPV = () => {
  return (
    <div className="grid bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-lg mx-auto">
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-xl">John Doe</h3>
          <p className="text-sm text-gray-500">@johndoe</p>
        </div>
      </div>
      <div className="mt-3">
        <Textarea className="resize-none" rows={3} placeholder="What's happening?" />
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <MessageCircle className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Repeat2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ThumbsUp className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="primary" className="bg-purple-500 hover:bg-purple-700 dark:bg-purple-800 dark:hover:bg-purple-900">Tweet</Button>
      </div>
    </div>
  );
};

export default Tweet_QUGPV;