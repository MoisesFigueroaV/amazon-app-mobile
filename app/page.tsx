// app/page.tsx
import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/home');
  return null; // No se renderiza nada porque redirige inmediatamente
}