from .models import Release
from django.forms import ModelForm, TextInput, DateTimeInput, ClearableFileInput, Select

class NewReleaseForm(ModelForm):
    class Meta:
        model = Release
        fields = ['releaseName', 'artistName', 'releaseGenre', 'releaseType', 'artistLink', 'releaseUPC', 'releaseDate', 'artistRealName', 'eclipticContent', "releaseCover"]
        
        widgets = {
            "releaseName": TextInput(attrs={
                'id': 'release-name',
                'type': 'text',
                'placeholder': "Release name",
                'autocomplete': 'off'
            }),

                "artistName": TextInput(attrs={
                'id': 'artist-name',
                'type': 'text',
                'placeholder': "Artist nickname",
                'autocomplete': 'off'
            }),

                "releaseGenre": Select(choices=[
                    ('', 'Release genre'),
                    ('rap', 'Rap'),
                    ('Trap', 'Trap'),
                    ('rnb', 'RnB'),
                    ('soul', 'Soul'),
                    ('pop-rap', 'Pop-Rap'),
                    ('old-school-rap', 'Old School Rap'),
                    ('electronic', 'Electronic'),
                    ('techno', 'Techno'),
                    ('experimental', 'Experimental'),
                    ('dnb', 'Drum & Bass'),
                    ('house', 'House'),
                    ('acoustic', 'Acoustic'),
                    ('alternative', 'Alternative'),
                    ('pop-rock', 'Pop-Rock'),
                    ('punk', 'Punk'),
                    ('indie', 'Indie'),
                    ('rock', 'Rock'),
                    ('metal', 'Metal'),
                    ('pop', 'Pop'),
                    ('classic', 'Classic'),
                    ('folk', 'Folk'),
                    ('soundtrack', 'Soundtrack'),
            ], attrs={
                'id': 'release-genre',
                'type': 'text',
                'placeholder': "Release genre",
                'autocomplete': 'off',
            }),
                "releaseType": Select(choices=[
                    ('', 'Release type'),
                    ('single', 'Single'),
                    ('ep', 'EP'),
                    ('album', 'Album'),
                ],
                
                attrs={
                'id': 'release-type',
                'type': 'text',
                'placeholder': "Release type",
                'autocomplete': 'off'
            }),

                "artistLink": TextInput(attrs={
                'id': 'artist-link',
                'type': 'text',
                'placeholder': "Enter artist spotify profile link (optional, if u need to create new profile keep it clear)"
            }),

                "releaseUPC": TextInput(attrs={
                'id': 'release-upc',
                'type': 'text',
                'placeholder': "Release UPC (optional)",
                'autocomplete': 'off'
            }),

                "releaseDate": DateTimeInput(attrs={
                'id': 'release-date',
                'type': 'date',
                'placeholder': "Release date",
                'autocomplete': 'off'
            }),

                "artistRealName": TextInput(attrs={
                'id': 'release-artist-real-name',
                'type': 'text',
                'placeholder': "Autrhor real name"
            }),

                "eclipticContent": Select(choices=[
                    ('', 'Ecliptic content'),
                    ('no', 'No'),
                    ('yes', 'Yes'),
                ],
                    attrs={
                    'id': 'release-ecliptic',
                    'type': 'text',
                    'placeholder': "Ecliptic content",
                    'autocomplete': 'off'
            }),

                "releaseCover": ClearableFileInput(attrs={
                'id': 'release-cover',
                'hidden': 'true',
                'accept': '.jpg, .jpeg',
            })
        }

    def __init__(self, *args, **kwargs):
        super(NewReleaseForm, self).__init__(*args, **kwargs)
        # Установка полей как необязательных
        self.fields['artistLink'].required = False
        self.fields['releaseUPC'].required = False