"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DottedSeparator } from "@/components/dotted-separator";
import { Skeleton } from "@/components/ui/skeleton";

export function AuthSkeleton() {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <Skeleton className="h-8 w-48" />
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <div className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex items-center justify-center">
        <Skeleton className="h-6 w-48" />
      </CardContent>
    </Card>
  );
}

export default AuthSkeleton;