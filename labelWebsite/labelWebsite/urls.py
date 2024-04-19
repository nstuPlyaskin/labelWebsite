from django.contrib import admin
from django.urls import path, include

from home.views import releases

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('home/', include('home.urls'), name='home'),
    path('releases/', releases, name='releases'),
] + static (settings.STATIC_URL, document_root=settings.STATIC_ROOT)
