import { Loader } from "./_components/Loader";

export default function Loading() {
  return (
    <main className='overflow-auto min-h-screen flex items-center justify-center'>
      <Loader />
    </main>
  );
}
