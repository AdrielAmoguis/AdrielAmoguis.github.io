# GitHub OAuth App Setup for Sveltia CMS

## 📋 Step 1: Create GitHub OAuth App

1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Click "New OAuth App"
3. Fill in the following details:

### Application Details
- **Application name**: `Adriel Portfolio CMS`
- **Homepage URL**: `https://adrielamoguis.com`
- **Authorization callback URL**: `https://adrielamoguis.com/admin/callback`
- **Setup URL**: `https://adrielamoguis.com/admin`

### Scopes Required
- ✅ `public_repo` (Read access to repositories)
- ✅ `user:email` (Read email address)
- ✅ `read:user` (Read user profile data)

### After Creation
You'll receive:
- **Client ID**: Copy this value
- **Client Secret**: Copy this immediately (won't be shown again)

## 🔐 Step 2: Add to Environment Variables

Create `.env.local` in your project root:

```bash
# .env.local
GITHUB_CLIENT_ID=your_client_id_here
GITHUB_CLIENT_SECRET=your_client_secret_here
NEXT_PUBLIC_SITE_URL=https://adrielamoguis.com
NEXT_PUBLIC_GITHUB_REPO=AdrielAmoguis/portfolio-site-opencode-poc
```

## ⚠️ Security Notes

- Never commit `.env.local` to git
- Keep Client Secret secure
- Use HTTPS for all URLs
- Limit repository access to only what's needed

## 🚀 Next Steps

After setting up OAuth:
1. Run `npm run dev` to test locally
2. Visit `/admin` to access CMS
3. Test content creation and editing
4. Verify GitHub commits are created

## 📱 Mobile Access

The OAuth setup allows you to:
- Edit content from mobile devices
- Manage content without desktop
- Use GitHub's secure authentication
- Access CMS from anywhere

---

**Ready to proceed?** Once you've created the GitHub OAuth App, let me know and I'll implement the CMS configuration and static HTML interface.