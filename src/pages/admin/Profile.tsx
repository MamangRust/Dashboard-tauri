import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Luffy from "@/assets/Luffy.jpg"

const profileFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(160).min(4),
  urls: z.object({
    twitter: z
      .string()
      .url({ message: "Please enter a valid URL." })
      .optional(),
    github: z.string().url({ message: "Please enter a valid URL." }).optional(),
  }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  bio: "I'm a software developer...",
  urls: {
    twitter: "https://twitter.com/renaldyhidayatt",
    github: "https://github.com/renaldyhidayatt",
  },
};

export default function ProfilePage() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    // TODO: Implement the submit functionality
    console.log(data);
  }

  return (
    <div className="flex h-full overflow-hidden">
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="w-20 h-20">
                <AvatarImage src={Luffy} alt="User" />
                  <AvatarFallback>RH</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Renaldy Hidayat</CardTitle>
                  <CardDescription>Software Engginer</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your profile information here.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8"
                    >
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input placeholder="johndoe" {...field} />
                            </FormControl>
                            <FormDescription>
                              This is your public display name.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="john@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us a little bit about yourself"
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              You can @mention other users and organizations to
                              link to them.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div>
                        <h3 className="mb-4 text-sm font-medium">
                          Social Links
                        </h3>
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="urls.twitter"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Twitter</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="https://twitter.com/johndoe"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="urls.github"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>GitHub</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="https://github.com/johndoe"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <Button type="submit">Update profile</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account settings and preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">
                      Confirm New Password
                    </Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Manage how you receive notifications.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifications">
                      Email Notifications
                    </Label>
                    <Switch id="email-notifications" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-notifications">
                      Push Notifications
                    </Label>
                    <Switch id="push-notifications" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="marketing-emails">Marketing Emails</Label>
                    <Switch id="marketing-emails" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
