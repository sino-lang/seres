from setuptools import setup

setup(
    name='seres',
    version='0.0.1',
    py_modules=['seres'],
    install_requires=[
        'click',
    ],
    entry_points={
        'console_scripts': [
            'seres=seres:cli',
        ],
    },
)
