import { Skeleton } from './ui/skeleton'

export const QuestionLoading = () => {
  return (
    <>
      <Skeleton className="h-5 w-10 rounded-full" />
      <Skeleton className="h-3 w-[60%] rounded" />
      <Skeleton className="h-3 w-[50%] rounded" />
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-3 w-[10%] rounded" />
      </div>
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-3 w-[10%] rounded" />
      </div>
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-3 w-[10%] rounded" />
      </div>
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-3 w-[10%] rounded" />
      </div>
    </>
  )
}
