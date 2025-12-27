'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { sampleEvents } from '@/data/sampleEvents';
import { Event } from '@/components/ui/EventsOutline';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export default function EventRegistrationPage() {
  const params = useParams();
  const router = useRouter();
  const eventId = params.eventId as string;

  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentId: '',
    department: '',
    year: '',
    additionalInfo: ''
  });

  useEffect(() => {
    const foundEvent = sampleEvents.find(e => e.id === eventId);
    if (foundEvent) setEvent(foundEvent);
    setLoading(false);
  }, [eventId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventId,
          eventTitle: event?.title || '',
          ...formData
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Submission failed');

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        studentId: '',
        department: '',
        year: '',
        additionalInfo: ''
      });

      setTimeout(() => router.push('/events'), 3000);
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#ece8df] text-[#642a38]">
        <Navbar />
        <div className="pt-32 flex justify-center">
          <div className="animate-spin h-10 w-10 border-2 border-[#642a38] border-t-transparent rounded-full" />
        </div>
        <Footer />
      </main>
    );
  }

  if (!event) {
    return (
      <main className="min-h-screen bg-[#ece8df] text-[#642a38]">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <button
            onClick={() => router.push('/events')}
            className="px-6 py-2 bg-[#642a38] text-[#ece8df] rounded hover:bg-[#4e1f2b]"
          >
            Back to Events
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#ece8df] text-[#642a38]">
      <Navbar />

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Event Info */}
          <div className="bg-[#f7f4ee] border border-[#642a38]/20 rounded-xl shadow-md p-6 mb-8">
            <button
              onClick={() => router.back()}
              className="text-[#642a38] hover:text-[#4e1f2b] mb-4"
            >
              ← Back to Event
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              {event.imageUrl && (
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full md:w-48 h-48 object-cover rounded-lg"
                />
              )}
              <div>
                <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
                <p className="opacity-80 mb-3">{event.description}</p>
                <div className="text-sm space-y-1">
                  {event.date && <p><strong>Date:</strong> {event.date}</p>}
                  {event.time && <p><strong>Time:</strong> {event.time}</p>}
                  {event.location && <p><strong>Location:</strong> {event.location}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-[#f7f4ee] border border-[#642a38]/20 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Event Registration</h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Registration successful! Redirecting…
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  ['name', 'Full Name'],
                  ['email', 'Email'],
                  ['phone', 'Phone'],
                  ['studentId', 'Student ID'],
                  ['department', 'Department'],
                ].map(([name, label]) => (
                  <div key={name}>
                    <label className="block text-sm font-medium mb-1">{label}</label>
                    <input
                      name={name}
                      required
                      value={(formData as any)[name]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded border border-[#642a38]/30 focus:ring-2 focus:ring-[#642a38]"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium mb-1">Year</label>
                  <select
                    name="year"
                    required
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded border border-[#642a38]/30"
                  >
                    <option value="">Select Year</option>
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Additional Info</label>
                <textarea
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded border border-[#642a38]/30"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-[#642a38] text-[#ece8df] py-3 rounded-lg hover:bg-[#4e1f2b]"
                >
                  {submitting ? 'Submitting…' : 'Register'}
                </button>
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-6 py-3 border border-[#642a38]/30 rounded-lg hover:bg-[#ece8df]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
