import { NextResponse } from "next/server"
import { cookies } from "next/headers";

// Middleware to check if user is authenticated before allowing access to protected routes.
export async function middleware(req, res) {
    console.log('middleware');
    const cookieStore = cookies()
    const token = cookieStore.get('token') || '';
    console.log(token);
    const ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/authorise`, {
        headers: {
            'x-auth-token': token.value
        }
    });
    console.log(ApiResponse.status);
    if (ApiResponse.status !== 200) {
        return NextResponse.redirect(new URL('/login', req.url));
    } else {
        return NextResponse.next();
    }
}

export const config = {
    matcher: ['/user/:path*', '/admin/:path*']
}