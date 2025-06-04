
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Figma design system colors
				figma: {
					gray: {
						50: '#FDFDFD',
						100: '#F1F1F1',
						200: '#E2E2E2',
						300: '#A8A8A8',
						400: '#727272',
						900: '#1B1B1B'
					},
					dark: '#282828',
					success: '#00A656',
					purple: '#A444F3'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				// Figma border radius
				'figma-sm': '16px',
				'figma-md': '24px',
				'figma-lg': '32px',
				'figma-xl': '40px',
				'figma-pill': '90px'
			},
			spacing: {
				// Figma spacing scale
				'figma-xs': '4px',
				'figma-sm': '8px',
				'figma-md': '16px',
				'figma-lg': '24px',
				'figma-xl': '32px',
				'figma-2xl': '48px',
				'figma-3xl': '60px',
				'figma-4xl': '80px',
				'figma-5xl': '160px'
			},
			fontSize: {
				// Figma typography scale
				'figma-xs': ['12px', { lineHeight: '16px' }],
				'figma-sm': ['13px', { lineHeight: '18px' }],
				'figma-base': ['14px', { lineHeight: '20px' }],
				'figma-md': ['16px', { lineHeight: '22px' }],
				'figma-lg': ['18px', { lineHeight: '24px' }],
				'figma-xl': ['24px', { lineHeight: '28px' }],
				'figma-2xl': ['32px', { lineHeight: '36px' }],
				'figma-3xl': ['40px', { lineHeight: '44px' }],
				'figma-4xl': ['44px', { lineHeight: '48px' }],
				'figma-5xl': ['48px', { lineHeight: '52px' }],
				'figma-6xl': ['60px', { lineHeight: '60px' }]
			},
			letterSpacing: {
				'figma-sm': '-0.12px',
				'figma-md': '-0.14px',
				'figma-lg': '-0.4px',
				'figma-xl': '-0.66px',
				'figma-2xl': '-0.9px'
			},
			boxShadow: {
				'figma-card': '0px 2.15px 0.5px -2px rgba(0, 0, 0, 0.25), 0px 24px 24px -16px rgba(8, 8, 8, 0.04), 0px 6px 13px 0px rgba(8, 8, 8, 0.03), 0px 6px 4px -4px rgba(8, 8, 8, 0.05), 0px 5px 1.5px -4px rgba(8, 8, 8, 0.09)',
				'figma-inset': '0px -1px 0px 0px rgba(255, 255, 255, 0.80) inset, 0px 6px 13px 0px rgba(24, 24, 24, 0.03) inset, 0px 6px 4px -4px rgba(24, 24, 24, 0.05) inset, 0px 4.5px 1.5px -4px rgba(24, 24, 24, 0.07) inset',
				'figma-product': '0px 24px 32px -8px rgba(18, 18, 18, 0.05)'
			},
			backdropBlur: {
				'figma': '50px',
				'figma-32': '32px'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'figma-fade-in': {
					from: {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'figma-fade-in': 'figma-fade-in 0.5s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
