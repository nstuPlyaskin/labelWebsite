from django.contrib import admin
from django.urls import path, include
from home.views import releases, newRelease, allReleases, moderationReleases, draftsReleases, onDeleteReleases
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('home/', include('home.urls'), name='home'),
    path('home/', include('django.contrib.auth.urls')),
    path('releases/', releases, name='releases'),
    path('new-release/', newRelease, name='new-release'),
    path('all-releases/', allReleases, name='all-releases'),
    path('moderation-releases/', moderationReleases, name='moderation-releases'),
    path('drafts-releases/', draftsReleases, name='drafts-releases'),
    path('on-delete-releases/', onDeleteReleases, name='on-delete-releases'),
] + static (settings.STATIC_URL, document_root=settings.STATIC_ROOT)
