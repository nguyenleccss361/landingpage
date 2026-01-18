"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

/**
 * Tawk.to Chat Widget Integration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Sign up for a free account at https://www.tawk.to/
 * 2. Log in to your dashboard: https://dashboard.tawk.to/
 * 3. Create a new property or select an existing one
 * 4. Go to Administration > Channels > Chat Widget
 * 5. Copy your Property ID and Widget ID from the embed code
 * 6. Replace the values below with your actual IDs
 * 
 * The embed code will look like:
 * <script type="text/javascript">
 *   var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
 *   (function(){
 *     var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
 *     s1.async=true;
 *     s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
 *     ...
 *   })();
 * </script>
 * 
 * Extract YOUR_PROPERTY_ID and YOUR_WIDGET_ID from the URL
 * 
 * CUSTOMIZATION:
 * - Visit https://dashboard.tawk.to/ to customize widget appearance, colors, position
 * - Use Tawk.to JavaScript API for advanced customization (see code below)
 * - Install plugins from: https://plugins.tawk.to/
 * - Community support: https://help.tawk.to/
 */

// Get Tawk.to credentials from environment variables
// Set these in your .env.local file (see .env.local.example)
// Option 1: Use Property ID + Widget ID (traditional method)
// Option 2: Use Property ID + JavaScript API Key (newer method)
const TAWK_PROPERTY_ID = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID || "";
const TAWK_WIDGET_ID = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || "";
const TAWK_JAVASCRIPT_API_KEY = process.env.NEXT_PUBLIC_TAWK_JAVASCRIPT_API_KEY || "";

// Helper function to extract Widget ID from JavaScript API key or embed URL
function extractWidgetId(apiKey: string, propertyId: string): string {
  // If API key looks like a URL (e.g., https://embed.tawk.to/PROPERTY_ID/WIDGET_ID)
  if (apiKey.includes("embed.tawk.to")) {
    const match = apiKey.match(/embed\.tawk\.to\/([^\/]+)\/([^\/\s"']+)/);
    if (match && match[2]) {
      return match[2];
    }
  }
  // If API key is just the widget ID
  if (apiKey && !apiKey.includes("http") && apiKey.length > 0) {
    return apiKey;
  }
  return "";
}

export default function TawkTo() {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [loadTimeout, setLoadTimeout] = useState(false);

  useEffect(() => {
    // Check if Tawk.to widget is already loaded
    const checkWidgetLoaded = setInterval(() => {
      if (window.Tawk_API && window.Tawk_API.isLoaded) {
        setIsWidgetLoaded(true);
        setShowFallback(false);
        clearInterval(checkWidgetLoaded);
      }
    }, 500);

    // Show fallback if widget doesn't load within 10 seconds
    const timeout = setTimeout(() => {
      if (!isWidgetLoaded) {
        setLoadTimeout(true);
        setShowFallback(true);
      }
    }, 10000);

    return () => {
      clearInterval(checkWidgetLoaded);
      clearTimeout(timeout);
    };
  }, [isWidgetLoaded]);

  useEffect(() => {
    // Determine Widget ID: use explicit Widget ID, or extract from JavaScript API Key
    const widgetId = TAWK_WIDGET_ID || (TAWK_JAVASCRIPT_API_KEY ? extractWidgetId(TAWK_JAVASCRIPT_API_KEY, TAWK_PROPERTY_ID) : "");
    
    // Don't load if Property ID is not configured
    if (!TAWK_PROPERTY_ID) {
      console.warn(
        "Tawk.to: Property ID not configured. " +
        "Please set NEXT_PUBLIC_TAWK_PROPERTY_ID in your .env.local file"
      );
      setShowFallback(true);
      return;
    }

    // If no Widget ID found, try to use Property ID only (some Tawk.to setups work this way)
    if (!widgetId) {
      console.warn(
        "Tawk.to: Widget ID not found. " +
        "Please set NEXT_PUBLIC_TAWK_WIDGET_ID or NEXT_PUBLIC_TAWK_JAVASCRIPT_API_KEY in your .env.local file. " +
        "Attempting to load with Property ID only..."
      );
      // Continue anyway - some Tawk.to configurations work with just Property ID
    }

    // Prevent multiple script loads
    if (window.Tawk_API) {
      return;
    }
    
    // Create script element
    const script = document.createElement("script");
    script.async = true;
    
    // Build embed URL: if widgetId exists, use it; otherwise try Property ID only
    if (widgetId) {
      script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${widgetId}`;
    } else {
      // Fallback: some Tawk.to setups work with just Property ID
      script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}`;
    }
    
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    // Insert script into document
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    // Initialize Tawk.to API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Customize Tawk.to widget appearance and behavior
    window.Tawk_API.onLoad = function () {
      // Customize widget position, colors, etc.
      if (window.Tawk_API?.setAttributes) {
        window.Tawk_API.setAttributes(
          {
            // Custom attributes
            hash: "custom-hash",
            // You can add more customization here
          },
          function (error: any) {
            if (error) {
              console.error("Tawk.to customization error:", error);
            }
          }
        );
      }

      // Hide widget initially (optional - remove if you want it visible by default)
      // window.Tawk_API?.hideWidget();

      // Show widget after page load (optional)
      // setTimeout(() => {
      //   window.Tawk_API?.showWidget();
      // }, 3000);
    };

    // Handle widget events
    window.Tawk_API.onChatStarted = function () {
      console.log("Chat started");
    };

    window.Tawk_API.onChatEnded = function () {
      console.log("Chat ended");
    };

    window.Tawk_API.onChatMessageReceived = function () {
      console.log("Message received");
    };

    // Cleanup function
    return () => {
      // Optional: Remove script on unmount if needed
      // Note: Usually you want to keep Tawk.to loaded
    };
  }, [TAWK_PROPERTY_ID, TAWK_WIDGET_ID, TAWK_JAVASCRIPT_API_KEY]);

  // Show fallback chat button if credentials aren't configured or widget isn't loaded yet
  const widgetId = TAWK_WIDGET_ID || (TAWK_JAVASCRIPT_API_KEY ? extractWidgetId(TAWK_JAVASCRIPT_API_KEY, TAWK_PROPERTY_ID) : "");
  
  // Always show fallback button initially, hide it when widget loads
  // This ensures users always see a chat button
  if (showFallback || !isWidgetLoaded || !TAWK_PROPERTY_ID || loadTimeout) {
    return (
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999]">
        <button
          onClick={() => {
            // Try to open Tawk.to widget if available
            if (window.Tawk_API?.showWidget) {
              window.Tawk_API.showWidget();
            } else if (window.Tawk_API?.toggle) {
              window.Tawk_API.toggle();
            } else {
              // Fallback: open contact page or show setup message
              alert(
                "Tawk.to chat widget is loading...\n\n" +
                "If this message persists, please check:\n" +
                "1. Environment variables are set in Vercel\n" +
                "2. Property ID: " + (TAWK_PROPERTY_ID || "Not set") + "\n" +
                "3. Widget ID: " + (widgetId || "Not set")
              );
            }
          }}
          className="bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 relative group w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
          aria-label="Open chat"
        >
          {/* Subtle pulsing ring effect */}
          <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-30 group-hover:animate-ping transition-opacity"></div>
          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-full bg-primary/40 blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7 relative z-10" />
        </button>
      </div>
    );
  }

  return null; // Tawk.to widget handles its own UI when loaded
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Tawk_API?: {
      onLoad?: () => void;
      onChatStarted?: () => void;
      onChatEnded?: () => void;
      onChatMessageReceived?: () => void;
      setAttributes?: (attributes: Record<string, any>, callback?: (error?: any) => void) => void;
      hideWidget?: () => void;
      showWidget?: () => void;
      maximize?: () => void;
      minimize?: () => void;
      toggle?: () => void;
      show?: () => void;
      hide?: () => void;
      isLoaded?: boolean;
      [key: string]: any;
    };
    Tawk_LoadStart?: Date;
  }
}
