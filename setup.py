from setuptools import setup, find_packages
import os

setup(name='django-service-links',
    version='0.0.1',
    description='Social bookmarking',
    #long_description = read('README.rst'),
    author='Sjoerd Arendsen',
    url='https://github.com/Docc/django-service-links',
    #install_requires=('django-shop',),
    packages=find_packages(),
    include_package_data=True,
    zip_safe = False,
)