import { TabBar } from "@/components";
import { cookies } from 'next/headers'

export const metadata = {
    title: 'Cookies page',
    description: 'SEO Title',
};

export default function CookiesPage() {

    const cookieStore = cookies()
    const cookieTab = cookieStore.get('selectedTab')?.value ?? '1';

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white py-5 px-5">
            <div className="flex flex-col">
                <span className="text-3xl mb-3">Tabs</span>
                <TabBar currentTab={+cookieTab} />
            </div>
        </div>
    );
}