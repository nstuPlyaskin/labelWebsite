from .models import Release
from django.forms import ModelForm, TextInput, DateTimeInput

class NewReleaseForm(ModelForm):
    class Meta:
        model = Release
        fields = ['releaseName', 'artistName', 'releaseGenre', 'releaseType', 'artistLink', 'releaseUPC', 'releaseDate', 'artistRealName', 'eclipticContent']
        
        widgets = {
            "releaseName": TextInput(attrs={
                'id': 'release-name',
                'type': 'text',
                'placeholder': "Release name"
            }),

                "artistName": TextInput(attrs={
                'id': 'artist-name',
                'type': 'text',
                'placeholder': "Artist nickname"
            }),

                "releaseGenre": TextInput(attrs={
                'id': 'release-genre',
                'type': 'text',
                'placeholder': "Release genre"
            }),

                "releaseType": TextInput(attrs={
                'id': 'release-type',
                'type': 'text',
                'placeholder': "Release type"
            }),

                "artistLink": TextInput(attrs={
                'id': 'artist-link',
                'type': 'text',
                'placeholder': "Enter artist spotify profile link"
            }),

                "releaseUPC": TextInput(attrs={
                'id': 'release-upc',
                'type': 'text',
                'placeholder': "Release UPC"
            }),

                "releaseDate": DateTimeInput(attrs={
                'id': 'release-date',
                'type': 'date',
                'placeholder': "Release date"
            }),

                "artistRealName": TextInput(attrs={
                'id': 'release-artist-real-name',
                'type': 'text',
                'placeholder': "Autrhor real name"
            }),

                "eclipticContent": TextInput(attrs={
                'id': 'release-ecliptic',
                'type': 'text',
                'placeholder': "Ecliptic content"
            }),
        }