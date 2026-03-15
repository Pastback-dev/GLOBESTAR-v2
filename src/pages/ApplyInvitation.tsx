import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { AlertCircle, Upload, CreditCard, Landmark, Wallet } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { toast } from 'sonner';

const formSchema = z.object({
  country: z.string().min(1, "Please select a country"),
  invitationType: z.string().min(1, "Please select an invitation type"),
  travelerCount: z.string().min(1, "Please select number of travelers"),
  embassy: z.string().min(1, "Embassy location is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  title: z.string().min(1, "Title is required"),
  fullName: z.string().min(2, "Full name is required"),
  dob: z.string().min(1, "Date of birth is required"),
  passportNumber: z.string().min(5, "Valid passport number is required"),
  issuingCountry: z.string().min(1, "Issuing country is required"),
  expiryDate: z.string().min(1, "Expiry date is required"),
  phone: z.string().min(5, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  homeAddress: z.string().min(5, "Home address is required"),
  profession: z.string().optional(),
  designation: z.string().optional(),
  annualIncome: z.string().optional(),
  employerName: z.string().optional(),
  employerAddress: z.string().optional(),
  otherDetails: z.string().optional(),
});

const ApplyInvitation = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "Mr.",
      profession: "Job",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Application submitted! Redirecting to payment...");
  };

  return (
    <div className="min-h-screen bg-section-gray">
      <TopBar />
      <Navbar />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-background rounded-xl shadow-lg overflow-hidden border">
            <div className="bg-navy p-8 text-navy-foreground">
              <h1 className="text-3xl font-bold mb-2">Apply for an Invitation Letter</h1>
              <p className="text-navy-foreground/70 text-sm">Complete the form below to start your application process.</p>
            </div>

            <div className="p-8">
              <Alert className="mb-8 bg-orange/5 border-orange/20">
                <AlertCircle className="h-4 w-4 text-orange" />
                <AlertTitle className="text-orange font-bold">Most Important Instructions</AlertTitle>
                <AlertDescription className="text-sm text-muted-foreground leading-relaxed">
                  Please complete the application form with accurate information that matches your travel documents. Incomplete forms will not be accepted. Upload the required documents in PDF format and proceed to make the payment using one of the following methods: Visa/MasterCard, Bank Account, PayPal, or Bybit (Crypto). 
                  <span className="block mt-2 font-semibold text-navy">
                    * 7% transaction fee added for PayPal payments. No extra charges for other methods.
                  </span>
                </AlertDescription>
              </Alert>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Trip Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Choose Country *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="lithuania">Lithuania</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="albania">Albania</SelectItem>
                              <SelectItem value="belarus">Belarus</SelectItem>
                              <SelectItem value="germany">Germany</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="invitationType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Choose Invitation Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="visit">Visit Letter</SelectItem>
                              <SelectItem value="family">Family Letter</SelectItem>
                              <SelectItem value="business">Business Letter</SelectItem>
                              <SelectItem value="mediation">Mediation Letter</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="travelerCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Travelers *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Number" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {[1, 2, 3, 4, 5, "6+"].map(n => (
                                <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="embassy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Embassy Location *</FormLabel>
                          <FormControl>
                            <Input placeholder="E.g. 42 Wallaby Way" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Travel Start Date *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="endDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Travel Finish Date *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="text-lg font-bold text-navy mb-6">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Your Title *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex gap-4"
                              >
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl><RadioGroupItem value="Mr." /></FormControl>
                                  <FormLabel className="font-normal">Mr.</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl><RadioGroupItem value="Mrs." /></FormControl>
                                  <FormLabel className="font-normal">Mrs.</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl><RadioGroupItem value="Miss." /></FormControl>
                                  <FormLabel className="font-normal">Miss.</FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="As per passport" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date of Birth *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="passportNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Passport Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="Passport Number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="issuingCountry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Issuing Country *</FormLabel>
                            <FormControl>
                              <Input placeholder="Issuing Country" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="expiryDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date of Expire *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input placeholder="E.g., +1 300 400 5000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Email Address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="mt-6">
                      <FormField
                        control={form.control}
                        name="homeAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Home Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="E.g., 42 Wallaby Way" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="text-lg font-bold text-navy mb-6">Professional Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="profession"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Your Profession</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex gap-4"
                              >
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl><RadioGroupItem value="Job" /></FormControl>
                                  <FormLabel className="font-normal">Job</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl><RadioGroupItem value="Business" /></FormControl>
                                  <FormLabel className="font-normal">Business</FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="designation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Designation</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Designation" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="annualIncome"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Annual Income in Euro</FormLabel>
                            <FormControl>
                              <Input placeholder="Annual Income" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="employerName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Employer Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Employer Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="mt-6">
                      <FormField
                        control={form.control}
                        name="employerAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Employer Address</FormLabel>
                            <FormControl>
                              <Input placeholder="E.g., 42 Wallaby Way" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="text-lg font-bold text-navy mb-6">Document Uploads (PDF Only)</h3>
                    <div className="grid md:grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <Label>Passport (main applicant) *</Label>
                        <div className="flex items-center gap-4 p-4 border-2 border-dashed rounded-lg hover:bg-navy/5 transition-colors cursor-pointer">
                          <Upload className="text-muted-foreground" size={20} />
                          <span className="text-sm text-muted-foreground">Choose File (PDF)</span>
                          <input type="file" className="hidden" accept=".pdf" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Wife Passport (if applying with her)</Label>
                        <div className="flex items-center gap-4 p-4 border-2 border-dashed rounded-lg hover:bg-navy/5 transition-colors cursor-pointer">
                          <Upload className="text-muted-foreground" size={20} />
                          <span className="text-sm text-muted-foreground">Choose File (PDF)</span>
                          <input type="file" className="hidden" accept=".pdf" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Other all Passports in one PDF (if applying with family)</Label>
                        <div className="flex items-center gap-4 p-4 border-2 border-dashed rounded-lg hover:bg-navy/5 transition-colors cursor-pointer">
                          <Upload className="text-muted-foreground" size={20} />
                          <span className="text-sm text-muted-foreground">Choose File (PDF)</span>
                          <input type="file" className="hidden" accept=".pdf" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-8">
                    <FormField
                      control={form.control}
                      name="otherDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Other Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="E.g., type your other details if you want." 
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="border-t pt-8">
                    <h3 className="text-lg font-bold text-navy mb-6">Payment Methods</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center p-4 border rounded-lg bg-section-gray">
                        <CreditCard className="text-navy mb-2" size={24} />
                        <span className="text-xs font-bold">Visa/MasterCard</span>
                      </div>
                      <div className="flex flex-col items-center p-4 border rounded-lg bg-section-gray">
                        <Landmark className="text-navy mb-2" size={24} />
                        <span className="text-xs font-bold">Bank Account</span>
                      </div>
                      <div className="flex flex-col items-center p-4 border rounded-lg bg-section-gray">
                        <Wallet className="text-navy mb-2" size={24} />
                        <span className="text-xs font-bold">PayPal (7% Fee)</span>
                      </div>
                      <div className="flex flex-col items-center p-4 border rounded-lg bg-section-gray">
                        <Wallet className="text-navy mb-2" size={24} />
                        <span className="text-xs font-bold">Bybit (Crypto)</span>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-orange hover:bg-orange-hover text-orange-foreground font-bold py-6 text-lg">
                    Proceed to Payment
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default ApplyInvitation;