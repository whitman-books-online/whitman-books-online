#!/usr/bin/env python3
import os
import unittest

def suite():
    loader = unittest.TestLoader()
    start_dir = os.getcwd()
    suite = loader.discover(start_dir)
    return suite


if __name__ == '__main__':
    runner = unittest.TextTestRunner(verbosity=2)
    runner.run(suite())
