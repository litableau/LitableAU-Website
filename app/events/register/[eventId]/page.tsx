'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { sampleEvents } from '@/data/sampleEvents';
import { Event } from '@/components/ui/EventsOutline';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { ArrowLeft, CheckCircle2, XCircle, Calendar, Clock, MapPin } from 'lucide-react';

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
      <main className="min-h-screen bg-gradient-to-b from-[#F5F1EB] to-[#E8E0D5]">
        <Navbar />
        <div className="pt-32 flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin h-12 w-12 border-3 border-[#8B7355] border-t-transparent rounded-full" />
            <p className="text-[#8B7355] text-lg font-light">Loading event details...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!event) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#F5F1EB] to-[#E8E0D5]">
        <Navbar />
        <div className="pt-32 flex items-center justify-center min-h-[60vh]">
          <div className="text-center max-w-md px-4">
            <h1 className="text-3xl font-serif font-bold text-[#8B7355] mb-4">Event Not Found</h1>
            <p className="text-[#8B7355]/70 mb-6">The event you're looking for doesn't exist or has been removed.</p>
            <button
              onClick={() => router.push('/events')}
              className="px-8 py-3 bg-[#8B7355] text-white rounded-lg hover:bg-[#6B5A45] transition-all duration-200 font-medium"
            >
              Back to Events
            </button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F8F5F0] via-[#F5F1EB] to-[#E8E0D5] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-[#8B7355]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-[#8B7355]/5 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#8B7355] hover:text-[#6B5A45] transition-all duration-300 mb-8 group px-3 py-2 rounded-lg hover:bg-white/40 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium text-sm">Back to Event</span>
          </button>

          {/* Event Header Card */}
          <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden mb-8 border border-[#8B7355]/10 hover:shadow-2xl transition-all duration-500 group">
            {event.imageUrl && (
              <div className="h-56 sm:h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            )}
            <div className="p-6 sm:p-8 lg:p-10 relative">
              <div className="absolute top-0 left-8 w-1 h-16 bg-gradient-to-b from-[#8B7355] to-transparent opacity-30"></div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#8B7355] mb-4 leading-tight tracking-tight">
                {event.title}
              </h1>
              <p className="text-[#8B7355]/75 text-lg sm:text-xl leading-relaxed mb-8 font-light max-w-3xl">
                {event.description}
              </p>
              <div className="flex flex-wrap gap-6 text-sm sm:text-base text-[#8B7355]/70">
                {event.date && (
                  <div className="flex items-center gap-3 px-4 py-2 bg-white/50 rounded-full backdrop-blur-sm border border-[#8B7355]/10">
                    <Calendar className="w-4 h-4 text-[#8B7355]" />
                    <span className="font-medium">{formatDate(event.date)}</span>
                  </div>
                )}
                {event.time && (
                  <div className="flex items-center gap-3 px-4 py-2 bg-white/50 rounded-full backdrop-blur-sm border border-[#8B7355]/10">
                    <Clock className="w-4 h-4 text-[#8B7355]" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                )}
                {event.location && (
                  <div className="flex items-center gap-3 px-4 py-2 bg-white/50 rounded-full backdrop-blur-sm border border-[#8B7355]/10">
                    <MapPin className="w-4 h-4 text-[#8B7355]" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Registration Form Card */}
          <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border border-[#8B7355]/10 hover:shadow-2xl transition-all duration-500">
            <div className="mb-10 relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1 h-12 bg-gradient-to-b from-[#8B7355] to-[#8B7355]/50 rounded-full"></div>
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#8B7355] mb-2 tracking-tight">
                    Register for Event
                  </h2>
                  <p className="text-[#8B7355]/60 font-light text-sm sm:text-base">Fill in your details to complete registration</p>
                </div>
              </div>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-8 p-5 bg-gradient-to-r from-emerald-50 to-emerald-100/50 border border-emerald-200/50 rounded-2xl flex items-center gap-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-emerald-900 text-lg">Registration Successful!</p>
                  <p className="text-sm text-emerald-700 mt-1">You will be redirected shortly...</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-5 bg-gradient-to-r from-red-50 to-red-100/50 border border-red-200/50 rounded-2xl flex items-center gap-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-red-900 text-lg">Registration Failed</p>
                  <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2.5 group">
                  <label htmlFor="name" className="block text-sm font-semibold text-[#8B7355] tracking-wide">
                    Full Name <span className="text-red-500 font-normal">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 bg-white/60 backdrop-blur-sm border border-[#8B7355]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B7355]/40 focus:border-[#8B7355]/50 focus:bg-white/80 transition-all duration-300 text-[#8B7355] placeholder:text-[#8B7355]/35 shadow-sm hover:shadow-md"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="space-y-2.5 group">
                  <label htmlFor="email" className="block text-sm font-semibold text-[#8B7355] tracking-wide">
                    Email Address <span className="text-red-500 font-normal">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 bg-white/60 backdrop-blur-sm border border-[#8B7355]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B7355]/40 focus:border-[#8B7355]/50 focus:bg-white/80 transition-all duration-300 text-[#8B7355] placeholder:text-[#8B7355]/35 shadow-sm hover:shadow-md"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2.5 group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#8B7355] tracking-wide">
                    Phone Number <span className="text-red-500 font-normal">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 bg-white/60 backdrop-blur-sm border border-[#8B7355]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B7355]/40 focus:border-[#8B7355]/50 focus:bg-white/80 transition-all duration-300 text-[#8B7355] placeholder:text-[#8B7355]/35 shadow-sm hover:shadow-md"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                </div>

                <div className="space-y-2.5 group">
                  <label htmlFor="studentId" className="block text-sm font-semibold text-[#8B7355] tracking-wide">
                    Student ID <span className="text-red-500 font-normal">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="studentId"
                      name="studentId"
                      type="text"
                      required
                      value={formData.studentId}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 bg-white/60 backdrop-blur-sm border border-[#8B7355]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B7355]/40 focus:border-[#8B7355]/50 focus:bg-white/80 transition-all duration-300 text-[#8B7355] placeholder:text-[#8B7355]/35 shadow-sm hover:shadow-md"
                      placeholder="Enter your student ID"
                    />
                  </div>
                </div>

                <div className="space-y-2.5 group">
                  <label htmlFor="department" className="block text-sm font-semibold text-[#8B7355] tracking-wide">
                    Department <span className="text-red-500 font-normal">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="department"
                      name="department"
                      type="text"
                      required
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 bg-white/60 backdrop-blur-sm border border-[#8B7355]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B7355]/40 focus:border-[#8B7355]/50 focus:bg-white/80 transition-all duration-300 text-[#8B7355] placeholder:text-[#8B7355]/35 shadow-sm hover:shadow-md"
                      placeholder="e.g., Computer Science"
                    />
                  </div>
                </div>

                <div className="space-y-2.5 group">
                  <label htmlFor="year" className="block text-sm font-semibold text-[#8B7355] tracking-wide">
                    Year <span className="text-red-500 font-normal">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="year"
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 bg-white/60 backdrop-blur-sm border border-[#8B7355]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B7355]/40 focus:border-[#8B7355]/50 focus:bg-white/80 transition-all duration-300 text-[#8B7355] appearance-none cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <option value="" className="text-[#8B7355]/40">Select Year</option>
                      <option value="1st Year" className="text-[#8B7355]">1st Year</option>
                      <option value="2nd Year" className="text-[#8B7355]">2nd Year</option>
                      <option value="3rd Year" className="text-[#8B7355]">3rd Year</option>
                      <option value="4th Year" className="text-[#8B7355]">4th Year</option>
                      <option value="Graduate" className="text-[#8B7355]">Graduate</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-5 h-5 text-[#8B7355]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 group">
                <label htmlFor="additionalInfo" className="block text-sm font-semibold text-[#8B7355] tracking-wide">
                  Additional Information
                  <span className="text-xs font-normal text-[#8B7355]/50 ml-2">(Optional)</span>
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3.5 bg-white/60 backdrop-blur-sm border border-[#8B7355]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B7355]/40 focus:border-[#8B7355]/50 focus:bg-white/80 transition-all duration-300 text-[#8B7355] placeholder:text-[#8B7355]/35 resize-none shadow-sm hover:shadow-md"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-[#8B7355] to-[#7A6345] text-white rounded-xl font-semibold hover:from-[#7A6345] hover:to-[#6B5A45] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none text-base"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    'Register Now'
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-8 py-4 border-2 border-[#8B7355]/30 text-[#8B7355] rounded-xl font-semibold hover:bg-[#8B7355]/10 hover:border-[#8B7355]/50 transition-all duration-300 backdrop-blur-sm bg-white/30"
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
